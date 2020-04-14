import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { RepositorioIngreso } from 'src/dominio/vehiculo/puerto/repositorio/repositorio-ingreso';
import { VehiculoEntidad } from './../../entidad/vehiculo.entidad';
import { Vehiculo } from 'src/dominio/vehiculo/modelo/vehiculo'; 

export class RepositorioIngresoMysql implements RepositorioIngreso {
    constructor(
        @InjectRepository(VehiculoEntidad)  // no entiendo bien esto ... 
        private readonly repositorio: Repository<VehiculoEntidad>,
      ) {}

      async estadoVehiculo(placa: string): Promise<boolean> { 
        const estado= await this.repositorio.query(
             `SELECT estado FROM pruebas.vehiculos where placa ="${placa}" and estado ="PARQUEADO" `)
        if( estado.length>0 ){
            if(estado[0].estado=="PARQUEADO"){
                return true;
            }return false ;            
        }else 
            return false ;
        }
        async registrarIngreso( vehiculo: Vehiculo ) {
            const entidad = new VehiculoEntidad();
            entidad.placa = vehiculo.placa;
            entidad.fechaIngreso=vehiculo.fechaIngreso;
            entidad.estado= vehiculo.estado;
            await this.repositorio.save(entidad);                         
        }
       
}


