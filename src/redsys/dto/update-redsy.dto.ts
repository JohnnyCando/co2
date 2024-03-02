import { PartialType } from '@nestjs/swagger';
import { CreateRedsyDto } from './create-redsy.dto';

export class UpdateRedsyDto extends PartialType(CreateRedsyDto) {}
