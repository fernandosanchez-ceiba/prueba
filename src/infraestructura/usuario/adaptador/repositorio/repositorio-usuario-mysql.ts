import { RepositorioUsuario } from 'src/dominio/usuario/puerto/repositorio/repositorio-usuario';
import { Usuario } from 'src/dominio/usuario/modelo/usuario';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntidad } from '../../entidad/usuario.entidad';
import { Repository } from 'typeorm';

export class RepositorioUsuarioMysql implements RepositorioUsuario {
  constructor(
    @InjectRepository(UsuarioEntidad)  // no entiendo bien esto ... 
    private readonly repositorio: Repository<UsuarioEntidad>,
  ) {}

  async existeNombreUsuario(nombre: string): Promise<boolean> {
    return (await this.repositorio.count({ nombre: nombre })) > 0;  //si es mayor de cero el usuario existe y retorna true a servicio-registrar-usuario
  }

  async guardar(usuario: Usuario) {
    const entidad = new UsuarioEntidad();  // no entiendo bien esto ...  
    entidad.clave = usuario.clave;
    entidad.fechaCreacion = usuario.fechaCreacion;
    entidad.nombre = usuario.nombre;
    await this.repositorio.save(entidad);  // guarde objeto entidad ... 
  }
}