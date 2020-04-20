import { Injectable } from '@nestjs/common';

import { Tarifas } from 'src/dominio/tarifas/modelo/tarifas'
import { ComandoCrearTarifas } from 'src/aplicacion/tarifas/comando/comando-crear-tarifa'
import { ServicioActualizarTarifas } from 'src/dominio/tarifas/servicio/servicio-crear-tarifas';
import { TarifasDTO } from "src/dominio/tarifas/modelo/tarifas.dto";

@Injectable()
export class ManejadorBorrarTarifas {
  constructor(private _servicioActualizarTarifas: ServicioActualizarTarifas) {}

  async ejecutar(comandoRegistrarUsuario: ComandoCrearTarifas): Promise<TarifasDTO[]> {
    await this._servicioActualizarTarifas.borrar(
      new Tarifas(
        comandoRegistrarUsuario.idtarifas,
        comandoRegistrarUsuario.minutoInferior,
        comandoRegistrarUsuario.minutoSuperior,
        comandoRegistrarUsuario.valor
      ),
    );
  }
}