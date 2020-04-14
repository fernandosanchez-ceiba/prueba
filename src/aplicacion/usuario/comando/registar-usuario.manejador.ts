import { Injectable } from '@nestjs/common';
import { ComandoRegistrarUsuario } from './registrar-usuario.comando';
import { ServicioRegistrarUsuario } from 'src/dominio/usuario/servicio/servicio-registrar-usuario';

import { Usuario } from 'src/dominio/usuario/modelo/usuario';

@Injectable()
export class ManejadorRegistrarUsuario {
  constructor(private _servicioRegistrarUsuario: ServicioRegistrarUsuario) {}

  async ejecutar(comandoRegistrarUsuario: ComandoRegistrarUsuario) {
    await this._servicioRegistrarUsuario.ejecutar(
      new Usuario(
        comandoRegistrarUsuario.nombre,
        comandoRegistrarUsuario.clave,
        comandoRegistrarUsuario.fechaCreacion,
      ),
    );
  }
}