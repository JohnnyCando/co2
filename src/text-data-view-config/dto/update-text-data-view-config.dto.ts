import { PartialType } from '@nestjs/mapped-types';
import { CreateTextDataViewConfigDto } from './create-text-data-view-config.dto';

export class UpdateTextDataViewConfigDto extends PartialType(CreateTextDataViewConfigDto) {}
