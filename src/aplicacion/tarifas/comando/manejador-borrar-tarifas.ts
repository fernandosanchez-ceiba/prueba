import { Injectable } from '@nestjs/common';
import { ServicioBorrarTarifas } from 'src/dominio/tarifas/servicio/servicio-borrar-tarifas';
import { TarifasDTO } from "src/dominio/tarifas/modelo/tarifas.dto";

@Injectable()
export class ManejadorBorrarTarifas {
  constructor(private _servicioBorrarTarifas: ServicioBorrarTarifas) {}

  async ejecutar(id: string): Promise<TarifasDTO[]> {
    return await this._servicioBorrarTarifas.borrar(id);    
  }
} 