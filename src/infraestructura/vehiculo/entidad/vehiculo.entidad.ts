import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'vehiculos' })

export class VehiculoEntidad {
  
  @PrimaryGeneratedColumn()
  idVehiculos: number;
    
  @Column()
  placa: string;

  @Column()
  fechaIngreso: string;
  @Column()
  fechaSalida: Date;
  @Column()
  tiempoParqueado: number;

  @Column()
  estado: string;
}


