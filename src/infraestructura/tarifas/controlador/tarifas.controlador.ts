//  Aca es el controlador y recibo las peticiones http.. 

import { Controller, Post, Body, Put, Delete, Param } from '@nestjs/common';   // importo lo que voy a usar de http con nest, tambien puedo usar Param, HttpCode para especificar el codigo http, entre otras cosas
import { ComandoCrearTarifas } from 'src/aplicacion/tarifas/comando/comando-crear-tarifa';
import { ManejadorCrearTarifas } from 'src/aplicacion/tarifas/comando/manejador-crear-tarifas';
import { ManejadorListarTarifas } from 'src/aplicacion/tarifas/consulta/manejador-listar-tarifas'
import { TarifasDTO } from 'src/dominio/tarifas/modelo/tarifas.dto'

@Controller('tarifas')  
export class TarifasControlador {
    constructor(
        private readonly _manejadorCrearTarifas: ManejadorCrearTarifas,
        private readonly _manejadorListarTarifas: ManejadorListarTarifas,        
        //private readonly _manejadorBorrarTarifas: ManejadorBorrarTarifas,
        //private readonly _manejadorActualizarTarifas: ManejadorActualizarTarifas        
    ){}
    
    @Post() 
    async crearTarifa(@Body() comandoCrearTarifas: ComandoCrearTarifas ) {
        return await this._manejadorCrearTarifas.ejecutar(comandoCrearTarifas); 
    }

    @Post('/listar')
      listaTarifas(): Promise<TarifasDTO[]> {        
        return this._manejadorListarTarifas.listaTarifas(); 
    }
    @Delete(':id')
    actualizarAlgo(@Param('id') id ): string{
    console.log(id);    
    return ("borrando tarifas" + id)
    }  

    @Put()
    borrarTarifas(@Body() tarifasDTO : TarifasDTO ): Promise<TarifasDTO[]> {
    console.log(tarifasDTO);
    return tarifasDTO[0]
    }
}