//  Aca es el controlador y recibo las peticiones http.. 

import { Controller, Post, Body, Put, Delete } from '@nestjs/common';   // importo lo que voy a usar de http con nest, tambien puedo usar Param, HttpCode para especificar el codigo http, entre otras cosas
import { ComandoCrearTarifas } from 'src/aplicacion/tarifas/comando/comando-crear-tarifa';
import { ManejadorCrearTarifas } from 'src/aplicacion/tarifas/comando/manejador-crear-tarifas';

@Controller('tarifas')  
export class TarifasControlador {
    constructor(
        private readonly _manejadorCrearTarifas: ManejadorCrearTarifas,
        //private readonly _manejadorListarTarifas: ManejadorListarTarifas,        
        //private readonly _manejadorBorrarTarifas: ManejadorBorrarTarifas,
        //private readonly _manejadorActualizarTarifas: ManejadorActualizarTarifas        
    ){}
    
    @Post() 
    async crearTarifa(@Body() comandoCrearTarifas: ComandoCrearTarifas ) {
        return await this._manejadorCrearTarifas.ejecutar(comandoCrearTarifas); 
    }

    @Post('/listar')
      crearAlgo(@Body() parametro): string{
        console.log(parametro);
        return "creando Tarifas .. " 
    }
    @Put()
    actualizarAlgo(): string{
    return "Actualizando tarifas"
    }  

    @Delete()
    borrarAlgo(): string{
    return "Borrando tarifas"
    }
}