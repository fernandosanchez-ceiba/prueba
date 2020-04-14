// es un indice que dice que conforma todo el modulo  
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuarioEntidad } from './entidad/usuario.entidad';
import { ServicioRegistrarUsuario } from 'src/dominio/usuario/servicio/servicio-registrar-usuario';

import { RepositorioUsuario }       from 'src/dominio/usuario/puerto/repositorio/repositorio-usuario';  // puerto
import { DaoUsuario }               from 'src/dominio/usuario/puerto/dao/dao-usuario';                  // puerto
import { DaoUsuarioMysql }          from './adaptador/dao/dao-usuario-mysql';                           //adaptador
import { RepositorioUsuarioMysql }  from './adaptador/repositorio/repositorio-usuario-mysql';           //adaptador


import { ManejadorRegistrarUsuario }  from 'src/aplicacion/usuario/comando/registar-usuario.manejador';
import { ManejadorListarUsuario }     from 'src/aplicacion/usuario/consulta/listar-usuarios.manejador';

import { UsuarioControlador } from './controlador/usuario.controlador';

const repositorioUsuarioProvider = {  /// interface acceso a Base de datos comunicacion entre puerto y adaptador
  provide: RepositorioUsuario,
  useClass: RepositorioUsuarioMysql,
};
const daoUsuarioProvider = {   /// interface acceso a Base de datos comunicacion entre puerto y adaptador
  provide: DaoUsuario,
  useClass: DaoUsuarioMysql,
};
@Module({ // @Module codigo raiz que contiene controladores servicios etc .. 
  imports: [TypeOrmModule.forFeature([UsuarioEntidad])],   // forFeature ?
  providers: [  //servicios
    ServicioRegistrarUsuario,
    repositorioUsuarioProvider,
    daoUsuarioProvider,
    ManejadorRegistrarUsuario,
    ManejadorListarUsuario,
  ],
  controllers: [UsuarioControlador],  //controladores, donde llegan las peticiones http 
})
export class UsuarioModule {}