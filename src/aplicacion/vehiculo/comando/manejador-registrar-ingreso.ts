// recibe llamado de controlador 

import { Injectable } from '@nestjs/common';
import { ComandoRegistrarIngreso } from './comando-registrar-ingreso';
import { ServicioRegistrarIngreso } from 'src/dominio/vehiculo/servicio/servicio-registrar-Ingreso';
import { Vehiculo } from 'src/dominio/vehiculo/modelo/vehiculo';

import moment = require('moment');



@Injectable()
export class ManejadorRegistrarIngreso {
    constructor (private _servicioRegistrarIngreso: ServicioRegistrarIngreso ){}
    
    async consultarEstado(comandoRegistrarIngreso: ComandoRegistrarIngreso){
        const fechaIngreso = moment().format('YYYY-MM-DD HH:mm:ss');
        await this._servicioRegistrarIngreso.IngresarVehiculo(

            new Vehiculo(
                comandoRegistrarIngreso.placa,
                comandoRegistrarIngreso.fechaIngreso = fechaIngreso,
                comandoRegistrarIngreso.fechaSalida,
                comandoRegistrarIngreso.tiempoParqueado,
                comandoRegistrarIngreso.estado="PARQUEADO",                
            ),
        )
    }
}