import { Controller, Get} from '@nestjs/common';   

@Controller('transacciones')  
export class TransaccionesControlador {    
    @Get() 
        dato(): string{
        return "transacciones realizadas: ...  "; 
    }
}




