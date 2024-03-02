import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFrequentlyAskedQuestionDto } from './dto/create-frequently-asked-question.dto';
import { UpdateFrequentlyAskedQuestionDto } from './dto/update-frequently-asked-question.dto';
import {FrequentlyAskedQuestion} from './entities/frequently-asked-question.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
const ObjectId = require('mongodb').ObjectId;
@Injectable()
export class FrequentlyAskedQuestionService {
  constructor( 
    @InjectRepository(FrequentlyAskedQuestion)
    private readonly repo: Repository<FrequentlyAskedQuestion>,
    private readonly entityManager: EntityManager, 
  ){}
  create(createFrequentlyAskedQuestionDto: CreateFrequentlyAskedQuestionDto) {
    let frequentlyAskedQuestionRepository  = Object.assign(new FrequentlyAskedQuestion(), createFrequentlyAskedQuestionDto);
      return frequentlyAskedQuestionRepository.save()
  }

  findAll() {
    const frequentlyAskedQuestionRepository = this.entityManager.getMongoRepository(FrequentlyAskedQuestion);
    return frequentlyAskedQuestionRepository.find({
      order: {
        ['identify_lang_frequently_question_id']: "ascending",
        ['order_number']: "ascending",
      }
    });
  }
  async findObjetcCountES(identify_lang_frequently_question_id_string,lang_string) {
    try {
      const frequentlyAskedQuestionRepository = this.entityManager.getMongoRepository(FrequentlyAskedQuestion);
  
      const frequentlyAskedQuestions = await frequentlyAskedQuestionRepository.findAndCount({
        where: {
          lang: {
            $eq: lang_string
          },
          identify_lang_frequently_question_id : {
            $eq: identify_lang_frequently_question_id_string
          }
        }
      });
  
      console.log(frequentlyAskedQuestions[1]);
      return frequentlyAskedQuestions[1];
    } catch (error) {
      console.error('Error al buscar preguntas frecuentes:', error);
      throw error; // Puedes manejar el error según tus necesidades.
    }
  }
  async findOne(id: string) {
    console.log(id)
    let idObject = new ObjectId(id)
    return await FrequentlyAskedQuestion.findOneBy(idObject);
  }
  async findAllWithLanguage(language_string: string): Promise<FrequentlyAskedQuestion[]> {
    console.log(language_string);
    try {
      const frequentlyAskedQuestionRepository = this.entityManager.getMongoRepository(FrequentlyAskedQuestion);
  
      const frequentlyAskedQuestions = await frequentlyAskedQuestionRepository.find({
        where: {
          lang: {
            $eq: language_string
          }
        }
      });
  
      console.log(frequentlyAskedQuestions);
      return frequentlyAskedQuestions;
    } catch (error) {
      console.error('Error al buscar preguntas frecuentes:', error);
      throw error; // Puedes manejar el error según tus necesidades.
    }
  }
  async update(id: string, updateFrequentlyAskedQuestionDto: UpdateFrequentlyAskedQuestionDto) {
    let frequentlyAskedQuestionRepository = FrequentlyAskedQuestion.getRepository();
      let idObject = new ObjectId(id)
      const frequentlyAskedQuestionRepositoryModel = await frequentlyAskedQuestionRepository.preload({
        id: idObject,
        ...updateFrequentlyAskedQuestionDto,
      });
      if (!frequentlyAskedQuestionRepositoryModel) {
        throw new NotFoundException(`answerTypes #${id} not found`);
      }
      return frequentlyAskedQuestionRepository.save(frequentlyAskedQuestionRepositoryModel);;
  }

  async remove(id: string) {
    let idObject = new ObjectId(id)
    await FrequentlyAskedQuestion.delete(idObject)
    return `This action removes a #${id} frequentlyAskedQuestion`;
  }
}
