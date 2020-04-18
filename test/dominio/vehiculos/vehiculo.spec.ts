import { Vehiculo } from 'src/dominio/vehiculo/modelo/vehiculo';

describe('Entidad Vehiculo : ', () => {
  
  const placaErrada= "AAA12"

  it('placa con 5 cacacteres debe retornar error', () => {
    expect(() => new Vehiculo(placaErrada, '2020-04-16 22:07:43', "2020-04-16 22:07:43", 10, "PARQUEADO" )).toThrow(/Placa/);
  });

  it('placa con 6 cacacteres se debe registrar ingreso ', () => {

    const placaCorrecta= "AAA123"
    const vehiculo = new Vehiculo(placaCorrecta, '2020-04-16 22:07:43', "2020-04-16 22:07:43", 10, "PARQUEADO");

    expect(vehiculo.placa).toEqual('AAA123');
    expect(vehiculo.tiempoParqueado).toEqual(10);
  });
});
