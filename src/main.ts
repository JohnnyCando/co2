import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { bootstrapServer } from './handler';

async function bootstrap() {
  const app = await bootstrapServer();
  const configService = app.get<ConfigService>(ConfigService);
  
  await app.listen(configService.get('APP_PORT', process.env.API_PORT));
  Logger.log(`Acciona CO2 is running on local: ${await app.getUrl()}`);
}

bootstrap();
