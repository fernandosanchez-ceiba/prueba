//  Aca es el controlador y recibo las peticiones http.. 

import { Controller, Post, Body, Put, Delete, Param } from '@nestjs/common';   // importo lo que voy a usar de http con nest, tambien puedo usar Param, HttpCode para especificar el codigo http, entre otras cosas
import { ComandoCrearTarifas } from 'src/aplicacion/tarifas/comando/comando-crear-tarifa';
import { ManejadorCrearTarifas } from 'src/aplicacion/tarifas/comando/manejador-crear-tarifas';
import { ManejadorListarTarifas } from 'src/aplicacion/tarifas/consulta/manejador-listar-tarifas';
import { ManejadorBorrarTarifas } from 'src/aplicacion/tarifas/comando/manejador-borrar-tarifas';
import { ManejadorActualizarTarifas } from 'src/aplicacion/tarifas/comando/manejador-actualizar-tarifas';
import { TarifasDTO } from 'src/dominio/tarifas/modelo/tarifas.dto'

@Controller('tarifas')  
export class TarifasControlador {
    constructor(
        private readonly _manejadorCrearTarifas: ManejadorCrearTarifas,
        private readonly _manejadorListarTarifas: ManejadorListarTarifas,        
        private readonly _manejadorBorrarTarifas: ManejadorBorrarTarifas,
        private readonly _manejadorActualizarTarifas: ManejadorActualizarTarifas        
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
    borrarTarifas(@Param('id') id: string ): Promise<TarifasDTO[]>  {
    console.log(id);    
    return this._manejadorBorrarTarifas.ejecutar(id); 
    }  

    @Put()
    actualizarTarifas(@Body() tarifa : TarifasDTO ): Promise<TarifasDTO[]> {        
    return this._manejadorActualizarTarifas.actualizar(tarifa);    
    }
}