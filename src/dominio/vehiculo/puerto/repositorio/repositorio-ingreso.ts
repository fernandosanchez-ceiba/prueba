import { Vehiculo } from './../../modelo/vehiculo';

//import { VehiculoDTO } from "src/dominio/vehiculo/modelo/vehiculo.dto";

export abstract class RepositorioIngreso{
    abstract async estadoVehiculo(placa: string):Promise<boolean>;
    abstract async registrarIngreso(vehiculo: Vehiculo);
}