import { Vehiculo } from 'src/dominio/vehiculo/modelo/vehiculo';

describe('Entidad Vehiculo : ', () => { //descripcion del grupo de pruebas cuando se ejecuta
  
  const placaErrada= "AAA12"

  it('placa con 5 cacacteres debe retornar error', () => {  //prueba 1, descripcion de la prueba unitaria 1
    expect(() => new Vehiculo(placaErrada, '2020-04-16 22:07:43', "2020-04-16 22:07:43", 10, "PARQUEADO" )).toThrow(/Placa/); //expect es lo que espero recibir
  });

  it('placa con 6 cacacteres se debe registrar ingreso ', () => { //prueba 2, descripcion de la prueba unitaria 2  

    const placaCorrecta= "AAA123"
    const vehiculo = new Vehiculo(placaCorrecta, '2020-04-16 22:07:43', "2020-04-16 22:07:43", 10, "PARQUEADO");

    expect(vehiculo.placa).toEqual('AAA123');
    expect(vehiculo.tiempoParqueado).toEqual(10);
  });
});
  