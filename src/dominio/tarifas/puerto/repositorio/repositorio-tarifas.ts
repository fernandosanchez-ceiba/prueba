
import { Tarifas } from 'src/dominio/tarifas/modelo/tarifas';
import { TarifasDTO } from 'src/dominio/tarifas/modelo/tarifas.dto';

export abstract class RepositorioTarifas{
    abstract async crearTarifa( tarifas: Tarifas);  
    abstract async borrarTarifa( id: string):Promise<TarifasDTO[]> ;
    abstract async actualizarTarifa( tarifa: TarifasDTO):Promise<TarifasDTO[]> ;
     
}
  