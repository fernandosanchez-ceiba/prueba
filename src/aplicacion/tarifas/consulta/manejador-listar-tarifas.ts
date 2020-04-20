import { Injectable } from '@nestjs/common';

import { DaoTarifas } from 'src/dominio/tarifas/puerto/dao/dao-tarifas';
import { TarifasDTO } from 'src/dominio/tarifas/modelo/tarifas.dto'

@Injectable()
export class ManejadorListarTarifas {
    private _daoTarifas: DaoTarifas; 

    constructor(daoTarifas: DaoTarifas) {
        this._daoTarifas = daoTarifas;
    }

    async listaTarifas(): Promise<TarifasDTO[]> {    
        return await this._daoTarifas.listarTarifas();
    }
}
