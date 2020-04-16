
import {Injectable} from '@nestjs/common';

import { 
    RepositorioTransacciones 
    } from 'src/dominio/transacciones/puerto/repositorio/repositorio-transacciones'

import { 
    TransaccionesDTO 
    } from 'src/dominio/transacciones/modelo/transacciones.dto'

@Injectable()
export class ServicioRegistrarTransaccion {

  private _repositorioTransacciones : RepositorioTransacciones; 

  constructor(repositorioTransacciones: RepositorioTransacciones) {
    this._repositorioTransacciones = repositorioTransacciones;
  }

  async ejecutar(transacciones : TransaccionesDTO) {
    console.log("hola desde servicio transaccion, datos recibidos:  ");
    await this._repositorioTransacciones.registrarTransaccion( transacciones); 
  }
  async saludar(){
      console.log("hola desde servicio transaccion ")
  }
}
