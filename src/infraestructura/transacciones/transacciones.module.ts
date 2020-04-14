

// es un indice que dice que conforma todo el modulo  
import { Module } from '@nestjs/common'; 


import { TransaccionesControlador } from "./controlador/transacciones.controlador";

@Module({ // @Module codigo raiz que contiene controladores servicios etc .. 
  imports: [],   // para la funcion  ?
  providers: [  //servicios
    
  ],
  controllers: [TransaccionesControlador],  //controladores, donde llegan las peticiones http 
})
export class TransaccionesModule {} 