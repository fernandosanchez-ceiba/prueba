import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

import { DaoTransacciones } from 'src/dominio/transacciones/puerto/dao/dao-transacciones';
import { CobrosDTO } from 'src/dominio/transacciones/modelo/cobros.dto';

export class DaoTransaccionesMysql implements DaoTransacciones {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async cobrosRealizados(): Promise<CobrosDTO[]> {
      console.log("consultando BD cobros realizados");
      
    return await this.entityManager.query(
      'SELECT * FROM pruebas.cobrosParqueadero',
    );
  }
}