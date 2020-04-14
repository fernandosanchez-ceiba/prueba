
import { Module } from '@nestjs/common'; 


import { TarifasControlador } from "./controlador/tarifas.controlador";

@Module({ // @Module codigo raiz que contiene controladores servicios etc .. 
  imports: [],   // para la funcion  ?
  providers: [  //servicios
    
  ],
  controllers: [TarifasControlador],  //controladores, donde llegan las peticiones http 
})
export class TarifasModule {} 