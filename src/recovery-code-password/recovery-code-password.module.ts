import { Module } from '@nestjs/common';
import { RecoveryCodePasswordService } from './recovery-code-password.service';
import { RecoveryCodePasswordController } from './recovery-code-password.controller';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecoveryCodePassword } from './entities/recovery-code-password.entity';

@Module({
  imports:[UserModule, TypeOrmModule.forFeature([RecoveryCodePassword]),],
  controllers: [RecoveryCodePasswordController],
  providers: [RecoveryCodePasswordService,UserService],
})
export class RecoveryCodePasswordModule {}
