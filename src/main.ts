import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('START');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('Backend API Portfolio Steve')
    .setDescription('API documentation for the backend of Steve\'s portfolio')
    .setVersion('1.0')
    .addTag('Portfolio')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0', () => {
    Logger.verbose(`Application is running on PORT: ${process.env.PORT}`);
    Logger.verbose(`Application is running on: http://localhost:${process.env.PORT}`);
    Logger.verbose(`Swagger is running on: http://localhost:${process.env.PORT}/api/docs`);
  });
}
bootstrap();
