import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm';

import { RepositorioIngreso } from "src/dominio/vehiculo/puerto/repositorio/repositorio-ingreso";
import { RepositorioIngresoMysql } from "src/infraestructura/vehiculo/adaptador/repositorio/repositorio-ingreso-mysql";

import { ManejadorRegistrarIngreso } from "src/aplicacion/vehiculo/comando/manejador-registrar-ingreso";
import { ServicioRegistrarIngreso } from "src/dominio/vehiculo/servicio/servicio-registrar-Ingreso"

import { VehiculoControlador } from "./controlador/vehiculo.controlador";
import { VehiculoEntidad } from './entidad/vehiculo.entidad';

import { RepositorioSalida } from "src/dominio/vehiculo/puerto/repositorio/repositorio-salida";
import { RepositorioSalidaMysql } from "src/infraestructura/vehiculo/adaptador/repositorio/repositorio-salida-mysql";
import { ManejadorRegistrarSalida } from "src/aplicacion/vehiculo/comando/manejador-registrar-salida";
import { ServicioRegistrarSalida } from "src/dominio/vehiculo/servicio/servicio-registrar-salida";

//pruebas transacciones
import {ServicioRegistrarTransaccion} from 'src/dominio/transacciones/servicio/servicio-registrar-transaccion'

const repositorioIngresoProvider = {
  provide: RepositorioIngreso,
  useClass: RepositorioIngresoMysql
}
const repositorioSalidaProvider ={
  provide: RepositorioSalida,
  useClass: RepositorioSalidaMysql
}

//
import { RepositorioTransacciones } from 'src/dominio/transacciones/puerto/repositorio/repositorio-transacciones';
import { RepositorioTransaccionesMysql } from 'src/infraestructura/transacciones/adaptador/repositorio/repositorio-transacciones-mysql';
import { TransaccionesEntidad } from 'src/infraestructura/transacciones/entidad/transacciones.entidad'

const repositorioTransaccionesProvider = {
  provide: RepositorioTransacciones,
  useClass: RepositorioTransaccionesMysql
}

@Module({ 
  imports: [TypeOrmModule.forFeature([VehiculoEntidad]), TypeOrmModule.forFeature([TransaccionesEntidad])], //esquemas de bd  
           
  providers: [  //servicios
    ServicioRegistrarTransaccion,
    repositorioTransaccionesProvider, 
    repositorioIngresoProvider,
    repositorioSalidaProvider,
    ManejadorRegistrarIngreso,
    ServicioRegistrarIngreso,
    ManejadorRegistrarSalida,
    ServicioRegistrarSalida
  ],
  controllers: [VehiculoControlador],  //controladores, donde llegan las peticiones http 
})
export class VehiculoModule {}