//import { TarifasDTO } from "src/dominio/tarifas/modelo/tarifas.dto";

import { Tarifas } from 'src/dominio/tarifas/modelo/tarifas';
import { TarifasDTO } from 'src/dominio/tarifas/modelo/tarifas.dto';

export abstract class RepositorioTarifas{
    abstract async crearTarifa( tarifas: Tarifas);  
    abstract async borrarTarifa( tarifas: Tarifas):Promise<TarifasDTO[]> ;   
    // abstract async IdentificadorEstadoVehiculo(placa: string):Promise<VehiculoDTO[]>;
   // abstract async tarifaCobro(minuto: string):Promise<TarifasDTO[]>;
     
}