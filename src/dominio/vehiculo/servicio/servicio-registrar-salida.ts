import { Injectable } from '@nestjs/common';

import { Vehiculo } from 'src/dominio/vehiculo/modelo/vehiculo';

import { RepositorioSalida } from '../puerto/repositorio/repositorio-salida';

import { ErrorDeNegocio } from 'src/dominio/excepciones/error-de-negocio';

import { ServicioRegistrarTransaccion } from 'src/dominio/transacciones/servicio/servicio-registrar-transaccion'

import moment = require('moment');
import { TransaccionesDTO } from 'src/dominio/transacciones/modelo/transacciones.dto';

const fechaSalida= moment().format('YYYY-MM-DD HH:mm:ss');
let tiempoParqueoMinutos: string[]; 
let formatoFechaIngreso: string; 
@Injectable()
export class ServicioRegistrarSalida {

    private _repositoSalida: RepositorioSalida;
    private _servicioRegistrarTransaccion: ServicioRegistrarTransaccion; 
    private _transaccionesDTO: TransaccionesDTO;
    
    constructor(repositorioSalida: RepositorioSalida,
        servicioRegistrarTransaccion:ServicioRegistrarTransaccion)
    {
            this._repositoSalida= repositorioSalida;
            this._servicioRegistrarTransaccion = servicioRegistrarTransaccion;           
    }

    async salidaVehiculo( placa: string ){   
        const datosVehiculo = await this._repositoSalida.IdentificadorEstadoVehiculo(placa);
        
        if(datosVehiculo.length>0){        
            if (datosVehiculo[0].estado=="PARQUEADO"){
                formatoFechaIngreso= moment(datosVehiculo[0].fechaIngreso).format('YYYY-MM-DD HH:mm:ss');            
                const tiempoParqueo= moment.duration(moment(fechaSalida).diff(formatoFechaIngreso)).asMinutes();
                tiempoParqueoMinutos= tiempoParqueo.toString().split(".");
                                
                const tarifa= await this._repositoSalida.tarifaCobro(tiempoParqueoMinutos[0]);
                                
                if(tarifa.length>0){
                    const vehiculo= new Vehiculo(
                        placa,
                        formatoFechaIngreso,
                        fechaSalida,
                        Number(tiempoParqueoMinutos[0]),
                        "SALIO"
                    );
                    console.log("enviando a servicio vehiculo");
                    
                    await this._repositoSalida.registrarSalida(vehiculo, datosVehiculo[0].idVehiculos ); 
                    const transaccion= new TransaccionesDTO;  
                    transaccion.fkIdVehiculos =  datosVehiculo[0].idVehiculos,
                    transaccion.fkIdtarifas =  tarifa[0].idTarifas
                    console.log("enviando a servicio tarifas: ") 
                    await this._servicioRegistrarTransaccion.ejecutar(transaccion);
                    

                }else{
                    throw new ErrorDeNegocio(
                        `No hay tarifa configurada`,                                
                    );
                }                       
            }
        } else{
                throw new ErrorDeNegocio(`Vehiculo no parqueado`);      
              }    
    }
}

