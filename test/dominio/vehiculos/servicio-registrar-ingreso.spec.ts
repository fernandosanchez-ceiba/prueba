import { Vehiculo } from 'src/dominio/vehiculo/modelo/vehiculo';
import { ServicioRegistrarIngreso } from 'src/dominio/vehiculo/servicio/servicio-registrar-Ingreso';

describe('prueba Servicio Registrar Ingreso: ', () => {
    it('Si la placa esta en estado parqueado en la BD, retorna false', async () => 
    {
        const servicioRegistrarIngreso = new ServicioRegistrarIngreso({
            estadoVehiculo: jest.fn(async placa=> placa=='AAA111'),
            registrarIngreso: jest.fn(async () => ({})),
        })
        await expect(
            servicioRegistrarIngreso.IngresarVehiculo(
                new Vehiculo('AAA111', '2020-04-16 22:05:43', "2020-04-16 22:07:43", 10, "PARQUEADO"),
            ),
        ).rejects.toThrow(/estado parqueado/);
    });
}); 
