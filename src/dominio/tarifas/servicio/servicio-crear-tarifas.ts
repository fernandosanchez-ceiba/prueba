import { Injectable } from '@nestjs/common';
//import { ErrorDeNegocio } from 'src/dominio/excepciones/error-de-negocio';

//
import { RepositorioTarifas } from 'src/dominio/tarifas/puerto/repositorio/repositorio-tarifas'
import { Tarifas } from 'src/dominio/tarifas/modelo/tarifas'

@Injectable()
export class ServicioCrearTarifas {
    private _repositorioTarifas: RepositorioTarifas; 

  constructor(repositorioTarifas: RepositorioTarifas) {
    this._repositorioTarifas = repositorioTarifas;
  }

  async crear(tarifas: Tarifas) {    
    await this._repositorioTarifas.crearTarifa(tarifas);
  }
}