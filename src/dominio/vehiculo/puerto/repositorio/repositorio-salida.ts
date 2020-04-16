
import { VehiculoDTO } from 'src/dominio/vehiculo/modelo/vehiculo.dto'
import { TarifasDTO } from "src/dominio/tarifas/modelo/tarifas.dto";
import { Vehiculo } from "src/dominio/vehiculo/modelo/vehiculo";

export abstract class RepositorioSalida{
    abstract async IdentificadorEstadoVehiculo(placa: string):Promise<VehiculoDTO[]>;
    abstract async tarifaCobro(minuto: string):Promise<TarifasDTO[]>;
    abstract async registrarSalida( vehiculo: Vehiculo, idVehiculo: number ); 
}