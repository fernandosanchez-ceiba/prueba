import { Injectable } from '@nestjs/common';
import { DaoTransacciones }  from 'src/dominio/transacciones/puerto/dao/dao-transacciones'
@Injectable()   
export class ManejadorTransacciones {  
  constructor(private _daoCobros: DaoTransacciones) {}  

  async ejecutar() {
    
     return await this._daoCobros.cobrosRealizados();
  
        }
}