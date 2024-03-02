import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnswerTypeDto } from './dto/create-answer-type.dto';
import { UpdateAnswerTypeDto } from './dto/update-answer-type.dto';
import { AnswerType } from './entities/answer-type.entity';
const ObjectId = require('mongodb').ObjectId;

@Injectable()
export class AnswerTypesService {
  constructor( 
    ){}
    async create(createAnswerTypesDto) {
      let answerTypesRepository  = Object.assign(new AnswerType(), createAnswerTypesDto);
      return answerTypesRepository.save()
    }
  
    findAll() {
      return AnswerType.find()
    }
  
    async findOne(id: string) {
      console.log(id)
      let idObject = new ObjectId(id)
      return await AnswerType.findOneBy(idObject);
    }
  
    async update(id: string, updateAnswerTypesDto) {
      let answerTypesRepository = AnswerType.getRepository();
      let idObject = new ObjectId(id)
      const answerTypesModel = await answerTypesRepository.preload({
        id: idObject,
        ...updateAnswerTypesDto,
      });
      if (!answerTypesModel) {
        throw new NotFoundException(`answerTypes #${id} not found`);
      }
      return answerTypesRepository.save(answerTypesModel);
    }
  
    async remove(id: string) {
      let idObject = new ObjectId(id)
      await AnswerType.delete(idObject)
      return `This action removes a #${id} answerTypes`;
    }
}
