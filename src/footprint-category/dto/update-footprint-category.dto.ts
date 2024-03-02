import { PartialType } from '@nestjs/swagger';
import { CreateFootprintCategoryDto } from './create-footprint-category.dto';

export class UpdateFootprintCategoryDto extends PartialType(CreateFootprintCategoryDto) {}
