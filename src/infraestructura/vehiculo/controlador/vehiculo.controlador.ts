import { Controller, Post, Body} from '@nestjs/common';  

import { ComandoRegistrarIngreso } from "src/aplicacion/vehiculo/comando/comando-registrar-ingreso";
import { ManejadorRegistrarIngreso } from "src/aplicacion/vehiculo/comando/manejador-registrar-ingreso";
import { ComandoRegistrarSalida } from 'src/aplicacion/vehiculo/comando/comando-registrar-salida';
import { ManejadorRegistrarSalida  } from 'src/aplicacion/vehiculo/comando/manejador-registrar-salida'
import { TarifasDTO } from 'src/dominio/tarifas/modelo/tarifas.dto';
@Controller('vehiculos')  
export class VehiculoControlador {
    constructor(
        private readonly _manejadorRegistrarIngreso: ManejadorRegistrarIngreso,  //singleton   
        private readonly _manejadorRegistrarSalida: ManejadorRegistrarSalida
    ){}

    @Post("ingreso") 
    async registrarIngreso(@Body() comandoRegistrarIngreso: ComandoRegistrarIngreso  ) {        
        return await this._manejadorRegistrarIngreso.consultarEstado(comandoRegistrarIngreso); 
    }

    @Post("salida")     
     async registrarSalida(@Body() comandoRegistrarSalida: ComandoRegistrarSalida  ): Promise<TarifasDTO[]> {
    
        return await this._manejadorRegistrarSalida.registrarSalida(comandoRegistrarSalida); 
    }
}