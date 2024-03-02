import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Req } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Auth } from 'src/decorators/auth.decorator';
import { Role } from 'src/common/enums/role.enum';
import { ApiTags } from '@nestjs/swagger';

@Controller('project')
@ApiTags('Projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto) {
    return this.projectService.create(createProjectDto);
  }
  @Post('getCountlang')
  async findCountObjectES(@Body() body){
    let identifyCode = body.identifyCode
    let lang = body.lang
    return this.projectService.findObjetcCountES(identifyCode,lang)
  }
  @Get('findWithLang')
  findAllWithLanguage(@Req() req: Request) {
    console.log(req)
    let lang = req.headers['lang']
    return this.projectService.findAllWithLanguage(lang);
  }
  @Get()
  findAll() {
    return this.projectService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjectDto) {
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(id);
  }
}
