
import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm';

import { TarifasControlador } from "./controlador/tarifas.controlador";

import { RepositorioTarifas } from 'src/dominio/tarifas/puerto/repositorio/repositorio-tarifas';
import { RepositorioTarifasMysql } from 'src/infraestructura/tarifas/adaptador/repositorio/repositorio-tarifas-mysql';
import { ServicioCrearTarifas } from 'src/dominio/tarifas/servicio/servicio-crear-tarifas';
import { TarifasEntidad } from 'src/infraestructura/tarifas/entidad/tarifas.entidad'
import { ManejadorCrearTarifas} from 'src/aplicacion/tarifas/comando/manejador-crear-tarifas';
import { ManejadorListarTarifas } from 'src/aplicacion/tarifas/consulta/manejador-listar-tarifas'
import { DaoTarifas } from 'src/dominio/tarifas/puerto/dao/dao-tarifas';
import { DaoTarifasMysql } from 'src/infraestructura/tarifas/adaptador/dao/dao-tarifas-mysql'


const repositorioTarifasProvider = {
  provide: RepositorioTarifas,
  useClass: RepositorioTarifasMysql,
};
const daoTarifasProvider = {
  provide: DaoTarifas,
  useClass: DaoTarifasMysql,
};

@Module({ 
  imports: [TypeOrmModule.forFeature([TarifasEntidad])],   
  providers: [  //servicios
    repositorioTarifasProvider, 
    ServicioCrearTarifas,
    ManejadorCrearTarifas,
    ManejadorListarTarifas,
    daoTarifasProvider
  ],
  controllers: [TarifasControlador], 
})
export class TarifasModule {} 
