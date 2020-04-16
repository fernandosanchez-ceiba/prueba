import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { RepositorioTransacciones } from 'src/dominio/transacciones/puerto/repositorio/repositorio-transacciones' 

import { TransaccionesEntidad } from 'src/infraestructura/transacciones/entidad/transacciones.entidad'
import { TransaccionesDTO } from 'src/dominio/transacciones/modelo/transacciones.dto'

export class RepositorioTransaccionesMysql implements RepositorioTransacciones {
    constructor(
        @InjectRepository(TransaccionesEntidad)
        private readonly repositorio: Repository<TransaccionesEntidad>
        ) {}       
        
        async registrarTransaccion( transaccionesDTO : TransaccionesDTO ) {
            console.log("datos a guardar en base de datos transacciones  :")
            console.log(transaccionesDTO);
            const entidadTransaccion = new TransaccionesEntidad;
            entidadTransaccion.fkIdtarifas = transaccionesDTO.fkIdtarifas;
            entidadTransaccion.fkIdVehiculos = transaccionesDTO.fkIdVehiculos;
            await this.repositorio.save(entidadTransaccion);             
            
       }
}