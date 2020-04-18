import { Injectable } from '@nestjs/common';

import { Tarifas } from 'src/dominio/tarifas/modelo/tarifas'
import { ComandoCrearTarifas } from 'src/aplicacion/tarifas/comando/comando-crear-tarifa'
import { ServicioCrearTarifas } from 'src/dominio/tarifas/servicio/servicio-crear-tarifas'

@Injectable()
export class ManejadorCrearTarifas {
  constructor(private _servicioCrearTarifas: ServicioCrearTarifas) {}

  async ejecutar(comandoRegistrarUsuario: ComandoCrearTarifas) {
    await this._servicioCrearTarifas.crear(
      new Tarifas(
        comandoRegistrarUsuario.idtarifas,
        comandoRegistrarUsuario.minutoInferior,
        comandoRegistrarUsuario.minutoSuperior,
        comandoRegistrarUsuario.valor
      ),
    );
  }
}