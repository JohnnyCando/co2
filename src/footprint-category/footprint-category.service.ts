import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFootprintCategoryDto } from './dto/create-footprint-category.dto';
import { UpdateFootprintCategoryDto } from './dto/update-footprint-category.dto';
const ObjectId = require('mongodb').ObjectId;
import { FootprintCategory } from './entities/footprint-category.entity';

@Injectable()
export class FootprintCategoryService {
  constructor( 
    ){}
    async create(createFootprintHistoryDto) {
      let footprintHistoryRepository  = Object.assign(new FootprintCategory(), createFootprintHistoryDto);
      return footprintHistoryRepository.save()
    }
  
    findAll() {
      return FootprintCategory.find()
    }
  
    async findOne(id: string) {
      console.log(id)
      let idObject = new ObjectId(id)
      return await FootprintCategory.findOneBy(idObject);
    }
  
    async update(id: string, updatefootprintHistoryDto) {
      let footprintHistoryRepository = FootprintCategory.getRepository();
      let idObject = new ObjectId(id)
      const footprintHistoryModel = await footprintHistoryRepository.preload({
        id: idObject,
        ...updatefootprintHistoryDto,
      });
      if (!footprintHistoryModel) {
        throw new NotFoundException(`footprintHistory #${id} not found`);
      }
      return footprintHistoryRepository.save(footprintHistoryModel);
    }
  
    async remove(id: string) {
      let idObject = new ObjectId(id)
      await FootprintCategory.delete(idObject)
      return `This action removes a #${id} footprintHistory`;
    }
}

