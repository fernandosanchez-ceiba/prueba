import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'transacciones' })

export class TransaccionesEntidad {
  
  @PrimaryGeneratedColumn()
  idTransacciones: number;
    
  @Column()
  fkIdVehiculos: number;

  @Column()
  fkIdtarifas: number;  
} 