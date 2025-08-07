import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType, Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('START');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Backend API Portfolio Steve')
    .setDescription('API documentation for the backend of Steve\'s portfolio')
    .setVersion('1.0')
    .addTag('Portfolio')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);

  // await app.listen(process.env.PORT ?? 3000, '0.0.0.0', () => {
  //   Logger.verbose(`Application is running on PORT: ${process.env.PORT}`);
  //   Logger.verbose(`Application is running on: http://localhost:${process.env.PORT}`);
  //   Logger.verbose(`API Documentation is running on: http://localhost:${process.env.PORT}/api/docs`);
  // });
  
   // Convertir PORT en number et fallback
  const port = parseInt(process.env.PORT ?? '3000', 10);

  // Bind explicitement à 0.0.0.0 (exigé par Render)
  await app.listen(port, '0.0.0.0');

  // Logging clair
  logger.log(`Application démarrée — écoute sur 0.0.0.0:${port}`);
  logger.log(`Préfixe global: /api (routes versionnées via URI)`);
  logger.log(`Swagger UI: /api/docs`);
}
bootstrap();
