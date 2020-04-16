import { Controller, Post} from '@nestjs/common';   

import { ManejadorTransacciones } from 'src/aplicacion/transacciones/consulta/transacciones.manejador';
//import { CobrosDTO } from 'src/dominio/transacciones/modelo/cobros.dto'

@Controller('transacciones')  
export class TransaccionesControlador {    
    constructor (
        private readonly _manejadorTransacciones: ManejadorTransacciones
    ){}
    @Post() 
        async cobrosRealizados() {
            return await this._manejadorTransacciones.ejecutar();
        }        
}
