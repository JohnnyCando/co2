import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';
const ObjectId = require('mongodb').ObjectId;

@Injectable()
export class QuestionService {
  constructor( 
    ){}
    async create(createQuestionDto) {
      let questionRepository  = Object.assign(new Question(), createQuestionDto);
      return questionRepository.save()
    }
  
    findAll() {
      return Question.find()
    }
  
    async findOne(id: string) {
      console.log(id)
      let idObject = new ObjectId(id)
      return await Question.findOneBy(idObject);
    }
  
    async update(id: string, updateQuestionDto) {
      let questionRepository = Question.getRepository();
      let idObject = new ObjectId(id)
      const questionModel = await questionRepository.preload({
        id: idObject,
        ...updateQuestionDto,
      });
      if (!questionModel) {
        throw new NotFoundException(`question #${id} not found`);
      }
      return questionRepository.save(questionModel);
    }
  
    async remove(id: string) {
      let idObject = new ObjectId(id)
      await Question.delete(idObject)
      return `This action removes a #${id} question`;
    }
}
