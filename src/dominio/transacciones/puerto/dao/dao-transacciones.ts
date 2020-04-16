import { CobrosDTO } from 'src/dominio/transacciones/modelo/cobros.dto';

export abstract class DaoTransacciones {   
  abstract async cobrosRealizados(): Promise<CobrosDTO[]>;
}



