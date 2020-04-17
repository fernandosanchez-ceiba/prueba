import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'transacciones' })

export class TransaccionesEntidad {
  
  @PrimaryColumn()
  idTransacciones: number;
    
  @Column()
  fkIdVehiculos: number;

  @Column()
  fkIdtarifas: number;  
} 