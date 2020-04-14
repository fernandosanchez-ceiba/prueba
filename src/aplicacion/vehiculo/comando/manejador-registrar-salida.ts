// recibe llamado de controlador 

import { Injectable } from '@nestjs/common';
import { ComandoRegistrarSalida } from './comando-registrar-salida';
import { ServicioRegistrarSalida  } from 'src/dominio/vehiculo/servicio/servicio-registrar-salida';

@Injectable()
export class ManejadorRegistrarSalida { //******   ManejadorRegistrarSalidaManejadorRegistrarSalida      */
    constructor (private _servicioRegistrarSalida: ServicioRegistrarSalida ){}
    
    async registrarSalida(comandoRegistrarSalida: ComandoRegistrarSalida){
        await this._servicioRegistrarSalida.salidaVehiculo(comandoRegistrarSalida.placa)
    }
}
 