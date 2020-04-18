//import { TarifasDTO } from "src/dominio/tarifas/modelo/tarifas.dto";

import { Tarifas } from 'src/dominio/tarifas/modelo/tarifas'

export abstract class RepositorioTarifas{
    abstract async crearTarifa( tarifas: Tarifas);    
    // abstract async IdentificadorEstadoVehiculo(placa: string):Promise<VehiculoDTO[]>;
   // abstract async tarifaCobro(minuto: string):Promise<TarifasDTO[]>;
     
}