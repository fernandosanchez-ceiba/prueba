import { NestFactory } from '@nestjs/core';  // default de nest  jf
import { AppModule } from './app.module'; // default de nest  jf

import { Logger } from '@nestjs/common';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { FiltroExcepcionesDeNegocio } from './infraestructura/excepciones/filtro-excepciones-negocio';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  // default de nest  jf
  const logger = app.get(Logger); 

  app.useGlobalFilters(new FiltroExcepcionesDeNegocio(logger));

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Bloque Arquitectura Hexagonal Node, JF')
    .setDescription('Bloque que hace uso de Nest.js para la creación de API\'s con Node.js')
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api', app, swaggerDocument);
  
  await app.listen(81); // default de nest  iniciamos nuestro escucha HTTP jf
  console.log("===================================");  
  console.log("PROYECTO INICIADO EN EL PUERTO 81");
  console.log("===================================");
}
bootstrap();

