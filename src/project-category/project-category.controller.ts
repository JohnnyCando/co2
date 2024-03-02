import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProjectCategoryService } from './project-category.service';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectCategoryDto } from './dto/update-project-category.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('project-category')
@ApiTags('Project Categories')
export class ProjectCategoryController {
  constructor(private readonly projectCategoryService: ProjectCategoryService) {}

  @Post()
  create(@Body() createProjectCategoryDto: CreateProjectCategoryDto) {
    return this.projectCategoryService.create(createProjectCategoryDto);
  }

  @Get()
  findAll() {
    return this.projectCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectCategoryService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjectCategoryDto: UpdateProjectCategoryDto) {
    return this.projectCategoryService.update(id, updateProjectCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectCategoryService.remove(id);
  }
}
