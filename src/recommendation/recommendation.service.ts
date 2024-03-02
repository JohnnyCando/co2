import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { UpdateRecommendationDto } from './dto/update-recommendation.dto';
import { Recommendation } from './entities/recommendation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
const ObjectId = require('mongodb').ObjectId;
@Injectable()
export class RecommendationService {
  constructor( 
    @InjectRepository(Recommendation)
    private readonly repo: Repository<Recommendation>,
    private readonly entityManager: EntityManager, 
  ){}
  create(createRecommendationDto: CreateRecommendationDto) {
    let recomendationRepository  = Object.assign(new Recommendation(), createRecommendationDto);
      return recomendationRepository.save()
  }
  async findObjetcCountES(identify_lang_recommended_id_string,lang_string) {
    console.log(identify_lang_recommended_id_string)
    try {
      const recommendationRepository = this.entityManager.getMongoRepository(Recommendation);
  
      const recommendations = await recommendationRepository.findAndCount({
        where: {
          lang: {
            $eq: lang_string
          },
          identify_lang_recommended_id : {
            $eq: identify_lang_recommended_id_string
          }
        }
      });
  
      console.log(recommendations[1]);
      return recommendations[1];
    } catch (error) {
      console.error('Error al buscar recomendaciones:', error);
      throw error; // Puedes manejar el error según tus necesidades.
    }
  }
  findAll() {
    const recommendationRepository = this.entityManager.getMongoRepository(Recommendation);
    return recommendationRepository.find({
      order: {
        ['identify_lang_recommended_id']: "ascending",
      }
    });
  }

  async findOne(id: string) {
    console.log(id)
    let idObject = new ObjectId(id)
    return await Recommendation.findOneBy(idObject);
  }
  async findAllWithLanguage(language_string: string): Promise<Recommendation[]> {
    console.log(language_string);
    try {
      const recommendationRepository = this.entityManager.getMongoRepository(Recommendation);
  
      const recommendations = await recommendationRepository.find({
        where: {
          lang: {
            $eq: language_string
          }
        },
        order: {
          ['identify_lang_recommended_id']: "ascending"
        }
       
      });
  
      console.log(recommendations);
      return recommendations;
    } catch (error) {
      console.error('Error al buscar preguntas frecuentes:', error);
      throw error; // Puedes manejar el error según tus necesidades.
    }
  }

 async update(id: string, updateRecommendationDto: UpdateRecommendationDto) {
    let recommendationRepository = Recommendation.getRepository();
      let idObject = new ObjectId(id)
      const recommendationModel = await recommendationRepository.preload({
        id: idObject,
        ...updateRecommendationDto,
      });
      if (!recommendationModel) {
        throw new NotFoundException(`answerTypes #${id} not found`);
      }
      return recommendationRepository.save(recommendationModel);
  }

  async remove(id: string) {
    let idObject = new ObjectId(id)
    await Recommendation.delete(idObject)
    return `This action removes a #${id} recommendation`;
  }
}
