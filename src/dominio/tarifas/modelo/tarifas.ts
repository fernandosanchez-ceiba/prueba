
import { ErrorLongitudInvalida } from 'src/dominio/excepciones/error-longitud-invalida';  //

export class Tarifas {
   
    private _idtarifas: number;
    private _minutoInferior: number;
    private _minutoSuperior: number;
    private _valor: number;

    constructor(idtarifas: number, minutoInferior: number, minutoSuperior: number, valor: number){
        this.validarMinutos(minutoInferior, minutoSuperior ) ; 
        this._idtarifas = idtarifas;
        this._minutoInferior= minutoInferior;
        this._minutoSuperior= minutoSuperior;
        this._valor=valor;
    }

    private validarMinutos(minutoInferior: number, minutoSuperior: number ) {
        console.log("validando datos inferior : " +minutoInferior+  " superior : " + minutoSuperior );        
        if ((minutoSuperior)<(minutoInferior)) {                        
            throw new ErrorLongitudInvalida( 
                `minuto superior "${minutoSuperior}", es menor o igual que minuto inferior "${minutoInferior}"`,
            );
        }
    }
    get idtarifas(): number {
        return this._idtarifas;
    }
    get minutoInferior(): number {
        return this._minutoInferior;
    }
    get minutoSuperior(): number {
        return this._minutoSuperior;
    }   
    get valor(): number {
        return this._valor;
    }
}
