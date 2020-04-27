// modelo

import { ErrorLongitudInvalida } from 'src/dominio/excepciones/error-longitud-invalida';  //

const NUMERO_MINIMO_CARACTERES_PLACA = 6;   

export class Vehiculo {
    private _placa: string;    
    private _fechaIngreso: string;
    private _fechaSalida: string;
    private _tiempoParqueado: number;
    private _estado: string;  //ingreso salio  

    constructor(placa: string, fechaIngreso: string, fechaSalida: string, tiempoParqueado: number, estado: string ){
        this.validarPlaca(placa) ; 
        this._placa= placa   
        this._fechaIngreso= fechaIngreso;
        this._fechaSalida= fechaSalida;
        this._tiempoParqueado= tiempoParqueado ;
        this._estado= estado ;
    }
    private validarPlaca(placa: string) {        
        if(placa===undefined){
            throw new ErrorLongitudInvalida( 
                `Placa null`,
            );
        }        
        if (placa.length != NUMERO_MINIMO_CARACTERES_PLACA) {
            throw new ErrorLongitudInvalida( 
                `Placa invalida`,
            );
        }
    }

    get placa(): string {
        return this._placa;
    }
    get fechaIngreso(): string {
        return this._fechaIngreso;
    }
    get fechaSalida(): string {
        return this._fechaSalida;
    }
    get tiempoParqueado(): number {
        return this._tiempoParqueado;
    }
    get estado(): string {
        return this._estado;
    }
}


