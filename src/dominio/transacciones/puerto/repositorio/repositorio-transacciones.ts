//import { Vehiculo } from 'src/dominio/vehiculo/modelo/vehiculo';
import { TransaccionesDTO } from 'src/dominio/transacciones/modelo/transacciones.dto'

export abstract class RepositorioTransacciones{
   abstract async registrarTransaccion(transacciones: TransaccionesDTO);
}