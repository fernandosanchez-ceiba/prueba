
//  Aca es el controlador y recibo las peticiones http.. 

import { Controller, Post, Body, Get} from '@nestjs/common';   // importo lo que voy a usar de http con nest, tambien puedo usar Param, HttpCode para especificar el codigo http, entre otras cosas

import { ComandoRegistrarUsuario }    from 'src/aplicacion/usuario/comando/registrar-usuario.comando';// DTO 
import { ManejadorRegistrarUsuario }  from 'src/aplicacion/usuario/comando/registar-usuario.manejador'; //POST controlador 

import { ManejadorListarUsuario }     from 'src/aplicacion/usuario/consulta/listar-usuarios.manejador'; //get
import { UsuarioDTO } from 'src/dominio/usuario/modelo/usuario.dto';  ///por que esta en el dominio ? 

@Controller('usuarios') //ruta donde llega la peticion http://127.0.0.1:81/usuarios  
export class UsuarioControlador {
  constructor(
    private readonly _manejadorRegistrarUsuario: ManejadorRegistrarUsuario,
    private readonly _manejadorListarUsuario: ManejadorListarUsuario,  /// _manejadorListarUsuario hereda de ManejadorListarUsuario con inyeccion
  ) {}  
  @Post()  
  async crear(@Body() comandoRegistrarUsuario: ComandoRegistrarUsuario) { //recibo los datos que llegan en el body en la variable comandoRegistrarUsuario 
    await this._manejadorRegistrarUsuario.ejecutar(comandoRegistrarUsuario);// los mando a la funcion registrar usuario..  
  }
  @Get()  
  async listar(): Promise<UsuarioDTO[]> {      
    return await this._manejadorListarUsuario.ejecutar();
  }   
}