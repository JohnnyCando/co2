import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.enableCors({
    origin: '*',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API Documentation')
    .setDescription('Esto es para GF Memories')
    .setVersion('1.0')
    .build();
  app.useGlobalPipes(new ValidationPipe());
  await app.setGlobalPrefix('api/v1');
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/swagger', app, document);
  await app.listen(process.env.API_PORT);
  Logger.log(`GF Memories is running on: ${await app.getUrl()}`);
}

bootstrap();
