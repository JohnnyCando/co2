import { PartialType } from '@nestjs/swagger';
import { CreateRecoveryCodePasswordDto } from './create-recovery-code-password.dto';

export class UpdateRecoveryCodePasswordDto extends PartialType(CreateRecoveryCodePasswordDto) {}
