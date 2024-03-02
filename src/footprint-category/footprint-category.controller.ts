import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FootprintCategoryService } from './footprint-category.service';
import { CreateFootprintCategoryDto } from './dto/create-footprint-category.dto';
import { UpdateFootprintCategoryDto } from './dto/update-footprint-category.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('FootPrint History')
@Controller('footprint-category')
export class FootprintCategoryController {
  constructor(private readonly footprinCategoryService: FootprintCategoryService) {}

  @Post()
  create(@Body() createFootprintHistoryDto) {
    return this.footprinCategoryService.create(createFootprintHistoryDto);
  }

  @Get()
  findAll() {
    return this.footprinCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.footprinCategoryService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFootprintHistoryDto) {
    return this.footprinCategoryService.update(id, updateFootprintHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.footprinCategoryService.remove(id);
  }
}
