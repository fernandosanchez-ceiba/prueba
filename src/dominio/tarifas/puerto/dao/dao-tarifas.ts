
import { TarifasDTO } from 'src/dominio/tarifas/modelo/tarifas.dto'
export abstract class DaoTarifas {
  abstract async listarTarifas(): Promise<TarifasDTO[]>;
}