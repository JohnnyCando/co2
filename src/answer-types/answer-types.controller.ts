import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AnswerTypesService } from './answer-types.service';
import { CreateAnswerTypeDto } from './dto/create-answer-type.dto';
import { UpdateAnswerTypeDto } from './dto/update-answer-type.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Answer Types')
@Controller('answer-types')
export class AnswerTypesController {
  constructor(private readonly answerTypesService: AnswerTypesService) {}

  @Post()
  create(@Body() createAnswerTypeDto) {
    return this.answerTypesService.create(createAnswerTypeDto);
  }

  @Get()
  findAll() {
    return this.answerTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.answerTypesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAnswerTypeDto) {
    return this.answerTypesService.update(id, updateAnswerTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.answerTypesService.remove(id);
  }
}
