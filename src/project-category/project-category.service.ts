import { Injectable } from '@nestjs/common';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectCategoryDto } from './dto/update-project-category.dto';
import { ProjectCategory } from './entities/project-category.entity';
@Injectable()
export class ProjectCategoryService {
  create(createProjectCategoryDto: CreateProjectCategoryDto) {
    let projectRepository  = Object.assign(new ProjectCategory(), createProjectCategoryDto);
    return projectRepository.save()
  }

  async findAll() {
    return await ProjectCategory.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} projectCategory`;
  }

  update(id: string, updateProjectCategoryDto: UpdateProjectCategoryDto) {
    return `This action updates a #${id} projectCategory`;
  }

  remove(id: string) {
    return `This action removes a #${id} projectCategory`;
  }
}
