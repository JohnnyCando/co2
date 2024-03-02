import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,EntityManager } from 'typeorm';
const ObjectId = require('mongodb').ObjectId;


@Injectable()
export class ProjectService {
  constructor( 
    @InjectRepository(Project)
    private readonly repo: Repository<Project>,
    private readonly entityManager: EntityManager, 
  ){}
  async create(createProjectDto) {
    let projectRepository  = Object.assign(new Project(), createProjectDto);
    return projectRepository.save()
  }
  findAll(){
    const projectsRepository = this.entityManager.getMongoRepository(Project);
    return projectsRepository.find({
      order: {
        ['identify_lang_project_id']: "ascending",
      }
    });
  }
  async findObjetcCountES(identify_lang_project_id_string,lang_string) {
    try {
      const projectsRepository = this.entityManager.getMongoRepository(Project);
  
      const projects = await projectsRepository.findAndCount({
        where: {
          lang: {
            $eq: lang_string
          },
          identify_lang_project_id : {
            $eq: identify_lang_project_id_string
          }
        }
      });
  
      console.log(projects[1]);
      return projects[1];
    } catch (error) {
      console.error('Error al buscar proyectos:', error);
      throw error; // Puedes manejar el error según tus necesidades.
    }
  }
  async findAllWithLanguage(language_string: string): Promise<Project[]> {
    console.log(language_string);
    try {
      const projectsRepository = this.entityManager.getMongoRepository(Project);
  
      const projects = await projectsRepository.find({
        where: {
          lang: {
            $eq: language_string
          }
        }
      });
  
      console.log(projects);
      return projects;
    } catch (error) {
      console.error('Error al buscar proyectos:', error);
      throw error; // Puedes manejar el error según tus necesidades.
    }
  }

  async findOne(id: string) {
    console.log(id)
    let idObject = new ObjectId(id)
    return await Project.findOne(idObject);
  }

  async update(id: string, updateProjectDto) {
    let projectRepository = Project.getRepository();
    let idObject = new ObjectId(id)
    const projectModel = await projectRepository.preload({
      id: idObject,
      ...updateProjectDto,
    });
    if (!projectModel) {
      throw new NotFoundException(`Project #${id} not found`);
    }
    return projectRepository.save(projectModel);
  }

  async remove(id: string) {
    let idObject = new ObjectId(id)
    await Project.delete(idObject)
    return `This action removes a #${id} project`;
  }
}
