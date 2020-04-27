import { Tarifas } from 'src/dominio/tarifas/modelo/tarifas'

describe('Entidad Tarifas : ', () => { //descripcion del grupo de pruebas cuando se ejecuta
     
  const idtarifas=1; 
  const tiempoInferior= 45;
  const tiempoSuperior= 60;
  const valor=700;

  it('tiempo inferior mayor al superior, debe retornar error', () => { 
    expect(() => new Tarifas(idtarifas, tiempoSuperior, tiempoInferior, valor)).toThrow(/es menor o igual que minuto inferior/); //expect es lo que espero recibir
  });

  it('tiempo correcto, debe crear la tarifa ', () => {  
    const tarifaNueva= new Tarifas(idtarifas, tiempoInferior, tiempoSuperior, valor ); 
    expect(tarifaNueva.idtarifas).toEqual(idtarifas);
    expect(tarifaNueva.valor).toEqual(valor)
  });
});