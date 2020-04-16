import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common'; 
import { ServicioRegistrarTransaccion } from 'src/dominio/transacciones/servicio/servicio-registrar-transaccion';


import { TransaccionesControlador } from "./controlador/transacciones.controlador";

import { TransaccionesEntidad } from 'src/infraestructura/transacciones/entidad/transacciones.entidad'

import { RepositorioTransacciones } from 'src/dominio/transacciones/puerto/repositorio/repositorio-transacciones';
import { RepositorioTransaccionesMysql } from 'src/infraestructura/transacciones/adaptador/repositorio/repositorio-transacciones-mysql';

import { ManejadorTransacciones } from 'src/aplicacion/transacciones/consulta/transacciones.manejador'

import { DaoTransacciones } from 'src/dominio/transacciones/puerto/dao/dao-transacciones'
import { DaoTransaccionesMysql } from 'src/infraestructura/transacciones/adaptador/dao/dao-transacciones-mysql'
const repositorioTransaccionesProvider = {
  provide: RepositorioTransacciones,
  useClass: RepositorioTransaccionesMysql
}
const daoTransaccionesProvider ={
  provide: DaoTransacciones,
  useClass: DaoTransaccionesMysql
}


@Module({ // @Module codigo raiz que contiene controladores servicios etc .. 
  imports:  [TypeOrmModule.forFeature([TransaccionesEntidad])],   // para la funcion  ?
  providers: [  ServicioRegistrarTransaccion, //servicios
                repositorioTransaccionesProvider,
                ManejadorTransacciones,
                daoTransaccionesProvider
  ],
  controllers: [TransaccionesControlador],  //controladores, donde llegan las peticiones http 
})
export class TransaccionesModule {} 