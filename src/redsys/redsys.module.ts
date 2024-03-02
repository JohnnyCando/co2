import { Module } from '@nestjs/common';
import { RedsysService } from './redsys.service';
import { RedsysController } from './redsys.controller';
import { PaymentModule } from 'src/payment/payment.module';
import { PaymentService } from 'src/payment/payment.service';
import { FootprintHistory } from 'src/footprint-history/entities/footprint-history.entity';
import { FootprintHistoryService } from 'src/footprint-history/footprint-history.service';
import { FootprintHistoryModule } from 'src/footprint-history/footprint-history.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/payment/entities/payment.entity';

@Module({
  imports:[
    PaymentModule,
    FootprintHistoryModule,
    TypeOrmModule.forFeature([Payment]),
    TypeOrmModule.forFeature([FootprintHistory])
  ],
  controllers: [RedsysController],
  providers: [RedsysService,PaymentService,FootprintHistoryService],
})
export class RedsysModule {}
