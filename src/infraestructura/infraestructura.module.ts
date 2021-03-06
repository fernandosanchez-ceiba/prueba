import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';   /// .forRoot() acceso a base de datos con parametros

import { VehiculoModule } from './vehiculo/vehiculo.module'

import { TransaccionesModule } from './transacciones/transacciones.module';

import { TarifasModule } from './tarifas/tarifas.module';



@Module({
  providers: [Logger],
  imports: [TypeOrmModule.forRoot(), VehiculoModule, TransaccionesModule, TarifasModule],
})
export class InfraestructuraModule {} 
