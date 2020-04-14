import { Vehiculo } from './../../modelo/vehiculo';
import { VehiculoDTO } from 'src/dominio/vehiculo/modelo/vehiculo.dto'
import { TarifasDTO } from "src/dominio/tarifas/modelo/tarifas.dto";
export abstract class RepositorioSalida{
    abstract async IdentificadorEstadoVehiculo(placa: string):Promise<VehiculoDTO[]>;
    abstract async registrarSalida(vehiculo: Vehiculo, codigoTarifa:number, codigoVehiculo: number);
    abstract async tarifaCobro(minuto: string):Promise<TarifasDTO[]>; 
}