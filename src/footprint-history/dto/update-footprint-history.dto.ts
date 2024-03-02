import { PartialType } from '@nestjs/mapped-types';
import { CreateFootprintHistoryDto } from './create-footprint-history.dto';

export class UpdateFootprintHistoryDto extends PartialType(CreateFootprintHistoryDto) {}
