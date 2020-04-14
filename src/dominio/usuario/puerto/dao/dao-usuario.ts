import { UsuarioDTO } from '../../modelo/usuario.dto';

export abstract class DaoUsuario {    //  export abstract?? 
  abstract async listar(): Promise<UsuarioDTO[]>;
}

