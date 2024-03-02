import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTextDataViewConfigDto } from './dto/create-text-data-view-config.dto';
import { UpdateTextDataViewConfigDto } from './dto/update-text-data-view-config.dto';
import { TextDataViewConfig } from './entities/text-data-view-config.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
const ObjectId = require('mongodb').ObjectId;

@Injectable()
export class TextDataViewConfigService {
  constructor( 
    @InjectRepository(TextDataViewConfig)
    private readonly repo: Repository<TextDataViewConfig>,
    private readonly entityManager: EntityManager, 
  ){}
    async create(createTextDataViewConfigDto) {
      let textDataViewConfigRepository  = Object.assign(new TextDataViewConfig(), createTextDataViewConfigDto);
      return textDataViewConfigRepository.save()
    }
    async findObjetcCountES(identify_lang_recommended_id_string,lang_string) {
      try {
        const textDataViewConfigRepository = this.entityManager.getMongoRepository(TextDataViewConfig);
    
        const textDataViewConfigs = await textDataViewConfigRepository.findAndCount({
          where: {
            lang: {
              $eq: lang_string
            },
            identify_lang_recommended_id : {
              $eq: identify_lang_recommended_id_string
            }
          }
        });
    
        console.log(textDataViewConfigs[1]);
        return textDataViewConfigs[1];
      } catch (error) {
        console.error('Error al buscar texto legales:', error);
        throw error; // Puedes manejar el error según tus necesidades.
      }
    }
    findAll() {
      const textDataViewConfigRepository = this.entityManager.getMongoRepository(TextDataViewConfig);
    return textDataViewConfigRepository.find({
      order: {
        ['identify_lang_text_view_id']: "ascending",
      }
    });
    }
    async findOne(id: string) {
      console.log(id)
      let idObject = new ObjectId(id)
      return await TextDataViewConfig.findOneBy(idObject);
    }

    async findAllWithLanguage(language_string: string, type_text:string): Promise<TextDataViewConfig[]> {
      console.log(language_string); 
      try {
        const textDataViewConfigRepository = this.entityManager.getMongoRepository(TextDataViewConfig);
    
        const textDataViewConfigs = await textDataViewConfigRepository.find({
          where: {
            lang: {
              $eq: language_string
            },
            type_string: {
              $eq: type_text
            }
          }
        });
    
        console.log(textDataViewConfigs);
        return textDataViewConfigs;
      } catch (error) {
        console.error('Error al buscar texto legales:', error);
        throw error; // Puedes manejar el error según tus necesidades.
      }
    }
    async update(id: string, updateTextDataViewConfigDto) {
      let textDataViewConfigRepository = TextDataViewConfig.getRepository();
      let idObject = new ObjectId(id)
      const textDataViewConfigModel = await textDataViewConfigRepository.preload({
        id: idObject,
        ...updateTextDataViewConfigDto,
      });
      if (!textDataViewConfigModel) {
        throw new NotFoundException(`textDataViewConfig #${id} not found`);
      }
      return textDataViewConfigRepository.save(textDataViewConfigModel);
    }
  
    async remove(id: string) {
      let idObject = new ObjectId(id)
      await TextDataViewConfig.delete(idObject)
      return `This action removes a #${id} textDataViewConfig`;
    }
}
