import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Handler, APIGatewayProxyEvent, Context, Callback } from 'aws-lambda';
import serverlessExpress from '@codegenie/serverless-express';


export const logger = new Logger('Handler');

let server: Handler;

export const bootstrapServer = async (): Promise<INestApplication> => {
  const app = await NestFactory.create(AppModule);

  setupNestApp(app);
  await app.init();

  logger.debug('> NEST Application Initialized!');
  return app;
};

async function bootstrapServerless(): Promise<Handler> {
  const app = await bootstrapServer();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const setupNestApp = (app: INestApplication) => {
  const configService = app.get<ConfigService>(ConfigService);

  app.enableCors({ origin: '*', credentials: true });
  app.setGlobalPrefix(configService.get('API_PREFIX', '/api/v1'));
  app.useGlobalPipes(new ValidationPipe());
  
  const swaggerConfig = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API Documentation')
    .setDescription('Acciona CO2 Development')
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/v1/swagger', app, swaggerDocument);
}

// [LAMBDA] API Gateway: Requests
export const api: Handler = async ( event: APIGatewayProxyEvent, context: Context, callback: Callback) => {
  logger.debug(`[EVENT] ${JSON.stringify(event)}`);
  logger.debug(`[CONTEXT] ${JSON.stringify(context)}`);

  server = server ?? (await bootstrapServerless());
  return server(event, context, callback);
};