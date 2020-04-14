import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { RepositorioSalida } from 'src/dominio/vehiculo/puerto/repositorio/repositorio-salida';
import { VehiculoEntidad } from '../../entidad/vehiculo.entidad';
import { Vehiculo } from 'src/dominio/vehiculo/modelo/vehiculo'; 



import { VehiculoDTO } from "src/dominio/vehiculo/modelo/vehiculo.dto";

import { TarifasDTO } from 'src/dominio/tarifas/modelo/tarifas.dto'

export class RepositorioSalidaMysql implements RepositorioSalida {
    constructor(
        @InjectRepository(VehiculoEntidad)  // no entiendo bien esto ... 
        private readonly repositorio: Repository<VehiculoEntidad>
        ) {}

        async IdentificadorEstadoVehiculo(placa: string): Promise<VehiculoDTO[]> { 
        return await this.repositorio.query(
             `SELECT idVehiculos, fechaIngreso, estado 
                FROM pruebas.vehiculos 
                where placa ="${placa}" and estado ="PARQUEADO" `)
        }

        async tarifaCobro(minutos: string): Promise<TarifasDTO[]> { 
            return await this.repositorio.query(
                 `SELECT idTarifas 
                    FROM pruebas.tarifas 
                    where "${minutos}" between minutoInferior and minutoSuperior `) 
        }

        async registrarSalida( vehiculo: Vehiculo, codigoTarifa:number, codigoVehiculo: number ) {
            console.log("datos a guardar en base de datos salida :")
            console.log(vehiculo);
            console.log(codigoTarifa);
            console.log(codigoVehiculo);       
          /*    
            const entidadTransaccion = new TransaccionesEntidad();
             
            entidadTransaccion.fkIdtarifas= codigoTarifa;
            entidadTransaccion.fkIdVehiculos= codigoVehiculo;
            await this.repositorioTransacciones.save(entidadTransaccion); 
       
          /*
            const entidad = new VehiculoEntidad();
            entidad.placa = vehiculo.placa;
            entidad.fechaIngreso=vehiculo.fechaIngreso;
            entidad.estado= vehiculo.estado;

            await this.repositorio.save(entidad);                          
            console.log(codigoTarifa)
        */
       }
}
