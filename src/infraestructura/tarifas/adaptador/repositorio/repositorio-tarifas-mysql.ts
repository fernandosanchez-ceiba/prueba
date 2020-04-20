import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

import { RepositorioTarifas } from 'src/dominio/tarifas/puerto/repositorio/repositorio-tarifas';
import { TarifasEntidad } from 'src/infraestructura/tarifas/entidad/tarifas.entidad'
//import { TarifasDTO } from 'src/dominio/tarifas/modelo/tarifas.dto'
import { Tarifas } from 'src/dominio/tarifas/modelo/tarifas'
//
import { TarifasDTO } from 'src/dominio/tarifas/modelo/tarifas.dto';

export class RepositorioTarifasMysql implements RepositorioTarifas {
    constructor(
        @InjectRepository(TarifasEntidad)  // no entiendo bien esto ... 
        private readonly repositorio: Repository<TarifasEntidad>,
        private readonly entityManager: EntityManager
        ) {}

        async crearTarifa(tarifa: Tarifas){ 
            const entidadTarifas =  new TarifasEntidad();
            entidadTarifas.idtarifas = tarifa.idtarifas;
            entidadTarifas.minutoInferior = tarifa.minutoInferior;
            entidadTarifas.minutoSuperior = tarifa.minutoSuperior;
            entidadTarifas.valor= tarifa.valor;
            await this.repositorio.save(entidadTarifas)
        } 
        
        async borrarTarifa(id: string):Promise<TarifasDTO[]>  {                     
            return await this.entityManager.query(
                `delete 
                    FROM pruebas.tarifas 
                    where idtarifas=${id}`,
            );
        }
        
        async actualizarTarifa(tarifa: TarifasDTO):Promise<TarifasDTO[]>  {                     
            return await this.entityManager.query(
                `UPDATE tarifas 
                SET valor= '${tarifa.valor}', 
                    minutoInferior='${tarifa.minutoInferior}',
                    minutoSuperior= '${tarifa.minutoSuperior}'  
                where (idtarifas='${tarifa.idtarifas}') `,
            );
        }
}
