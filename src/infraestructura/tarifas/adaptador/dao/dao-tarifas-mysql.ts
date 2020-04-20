import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

import { DaoTarifas } from 'src/dominio/tarifas/puerto/dao/dao-tarifas'
import { TarifasDTO } from 'src/dominio/tarifas/modelo/tarifas.dto'

export class DaoTarifasMysql implements DaoTarifas {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async listarTarifas(): Promise<TarifasDTO[]> {
    return await this.entityManager.query(
    ` SELECT idtarifas, minutoInferior, minutoSuperior, valor
        FROM tarifas where idtarifas!='0' `,
    );
  }
}
