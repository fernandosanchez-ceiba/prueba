import { Injectable } from '@nestjs/common';
import { Vehiculo } from '../modelo/vehiculo';

import { RepositorioIngreso } from '../puerto/repositorio/repositorio-ingreso';

import { ErrorDeNegocio } from 'src/dominio/excepciones/error-de-negocio';

@Injectable()
export class ServicioRegistrarIngreso {
    private _repositoIngreso: RepositorioIngreso;
    constructor(repositorioIngreso: RepositorioIngreso){
        this._repositoIngreso= repositorioIngreso;
    }
    async IngresarVehiculo( vehiculo: Vehiculo ){        
        if (await this._repositoIngreso.estadoVehiculo(vehiculo.placa)){
            throw new ErrorDeNegocio(
                `El vehiculo ya se encuentra en estado parqueado`,                                
            );            
        }
        await this._repositoIngreso.registrarIngreso(vehiculo); 
    }    
}

