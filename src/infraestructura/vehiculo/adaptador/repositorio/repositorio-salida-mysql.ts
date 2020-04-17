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

        async registrarSalida( vehiculo: Vehiculo, idVehiculo: number ) {
             
            return await this.repositorio.query(
              `UPDATE vehiculos 
                SET fechaSalida = '${vehiculo.fechaSalida}', estado =  '${vehiculo.estado}' 
                WHERE  idVehiculos = '${idVehiculo}'
              `
            )
       }
}
