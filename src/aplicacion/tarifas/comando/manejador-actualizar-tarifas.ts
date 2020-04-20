import { Injectable } from '@nestjs/common';
import { ServicioActualizarTarifas } from 'src/dominio/tarifas/servicio/servicio-actualizar-tarifas';
import { TarifasDTO } from "src/dominio/tarifas/modelo/tarifas.dto";

@Injectable()
export class ManejadorActualizarTarifas {
  constructor(private _servicioActualizarTarifas: ServicioActualizarTarifas) {}

  async actualizar(tarifa: TarifasDTO ): Promise<TarifasDTO[]> {
    return await this._servicioActualizarTarifas.actualizar(tarifa);    
  }
} 