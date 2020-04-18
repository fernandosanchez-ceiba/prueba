import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tarifas' })

export class TarifasEntidad {
  
  @PrimaryColumn()
  idtarifas: number;
    
  @Column()
  minutoInferior: number;

  @Column()
  minutoSuperior: number; 

  @Column()
  valor: number;

} 






