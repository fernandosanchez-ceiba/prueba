// recibe llamado de controlador 

import { Injectable } from '@nestjs/common';
import { ComandoRegistrarSalida } from './comando-registrar-salida';
import { ServicioRegistrarSalida  } from 'src/dominio/vehiculo/servicio/servicio-registrar-salida';
import { TarifasDTO } from 'src/dominio/tarifas/modelo/tarifas.dto'
@Injectable()
export class ManejadorRegistrarSalida { 
    constructor (private _servicioRegistrarSalida: ServicioRegistrarSalida ){} 
    
    async registrarSalida(comandoRegistrarSalida: ComandoRegistrarSalida): Promise<TarifasDTO[]> {
                
        return await this._servicioRegistrarSalida.salidaVehiculo(comandoRegistrarSalida.placa)             
    }
}
 
 