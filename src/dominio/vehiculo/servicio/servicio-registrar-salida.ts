import { Injectable } from '@nestjs/common';

import { Vehiculo } from 'src/dominio/vehiculo/modelo/vehiculo';

import { RepositorioSalida } from '../puerto/repositorio/repositorio-salida';

import { ErrorDeNegocio } from 'src/dominio/excepciones/error-de-negocio';

import { VehiculoDTO } from 'src/dominio/vehiculo/modelo/vehiculo.dto';
import moment = require('moment');

const fechaSalida= moment().format('YYYY-MM-DD HH:mm:ss');
let tiempoParqueoMinutos: string[]; 
let formatoFechaIngreso: string; 
@Injectable()
export class ServicioRegistrarSalida {

    private _repositoSalida: RepositorioSalida;

    private vehiculoDTO: VehiculoDTO;

    constructor(repositorioSalida: RepositorioSalida){
        this._repositoSalida= repositorioSalida;
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
                    await this._repositoSalida.registrarSalida(
                        new Vehiculo(
                            placa,
                            formatoFechaIngreso,
                            fechaSalida,
                            Number(tiempoParqueoMinutos[0]),
                            "SALIO"
                        ), tarifa[0].idTarifas,
                        datosVehiculo[0].idVehiculos
                    )
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
