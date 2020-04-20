import { Injectable } from '@nestjs/common';
//import { ErrorDeNegocio } from 'src/dominio/excepciones/error-de-negocio';
import { RepositorioTarifas } from 'src/dominio/tarifas/puerto/repositorio/repositorio-tarifas'
import { TarifasDTO } from 'src/dominio/tarifas/modelo/tarifas.dto'

@Injectable()
export class ServicioBorrarTarifas {
    private _repositorioTarifas: RepositorioTarifas; 

  constructor(repositorioTarifas: RepositorioTarifas) {
    this._repositorioTarifas = repositorioTarifas;
  }

  async borrar(id: string): Promise<TarifasDTO[]>  {    
    return await this._repositorioTarifas.borrarTarifa(id);
  }
}

 