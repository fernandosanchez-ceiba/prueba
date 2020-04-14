//  Aca es el controlador y recibo las peticiones http.. 

import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';   // importo lo que voy a usar de http con nest, tambien puedo usar Param, HttpCode para especificar el codigo http, entre otras cosas


@Controller('tarifas')  
export class TarifasControlador {    
    @Get() 
        dato1(): string{
        return "retornando tarifas "; 
    }

    @Post()
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



