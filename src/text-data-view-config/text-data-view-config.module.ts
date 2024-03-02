import { Module } from '@nestjs/common';
import { TextDataViewConfigService } from './text-data-view-config.service';
import { TextDataViewConfigController } from './text-data-view-config.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextDataViewConfig } from './entities/text-data-view-config.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([TextDataViewConfig]),
  ],
  controllers: [TextDataViewConfigController],
  providers: [TextDataViewConfigService],
})
export class TextDataViewConfigModule {}
