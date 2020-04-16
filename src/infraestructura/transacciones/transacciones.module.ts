import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common'; 
import { ServicioRegistrarTransaccion } from 'src/dominio/transacciones/servicio/servicio-registrar-transaccion';


import { TransaccionesControlador } from "./controlador/transacciones.controlador";

import { TransaccionesEntidad } from 'src/infraestructura/transacciones/entidad/transacciones.entidad'

import { RepositorioTransacciones } from 'src/dominio/transacciones/puerto/repositorio/repositorio-transacciones';
import { RepositorioTransaccionesMysql } from 'src/infraestructura/transacciones/adaptador/repositorio/repositorio-transacciones-mysql';

const repositorioTransaccionesProvider = {
  provide: RepositorioTransacciones,
  useClass: RepositorioTransaccionesMysql
}


@Module({ // @Module codigo raiz que contiene controladores servicios etc .. 
  imports:  [TypeOrmModule.forFeature([TransaccionesEntidad])],   // para la funcion  ?
  providers: [  ServicioRegistrarTransaccion, //servicios
                repositorioTransaccionesProvider
  ],
  controllers: [TransaccionesControlador],  //controladores, donde llegan las peticiones http 
})
export class TransaccionesModule {} 