import { Injectable } from '@nestjs/common';

import { UsuarioDTO } from 'src/dominio/usuario/modelo/usuario.dto';  //estructura del modelo usuario 

import { DaoUsuario } from 'src/dominio/usuario/puerto/dao/dao-usuario';  // logica 


@Injectable()   // no entiendo bn ... 
export class ManejadorListarUsuario {  //exporto esto a la clase usuario controlador.. 
  constructor(private _daoUsuario: DaoUsuario) {}  //otra interface 

  async ejecutar(): Promise<UsuarioDTO[]> {
    return await this._daoUsuario.listar();
  }
}





