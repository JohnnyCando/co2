import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFootprintHistoryDto } from './dto/create-footprint-history.dto';
import { UpdateFootprintHistoryDto } from './dto/update-footprint-history.dto';
import { FootprintHistory } from './entities/footprint-history.entity';
const ObjectId = require('mongodb').ObjectId;
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
@Injectable()
export class FootprintHistoryService {
  constructor( @InjectRepository(FootprintHistory)
  private readonly repo: Repository<FootprintHistory>,
  private readonly entityManager: EntityManager, 
    ){}
    async create(createFootprintHistoryDto) {
      let footprintHistoryRepository  = Object.assign(new FootprintHistory(), createFootprintHistoryDto);
      return footprintHistoryRepository.save()
    }
  
    findAll() {
      return FootprintHistory.find()
    }
  
    async findOne(id: string) {
      console.log(id)
      let idObject = new ObjectId(id)
      return await FootprintHistory.findOneBy(idObject);
    }
  
    async update(id: string, updatefootprintHistoryDto) {
      let footprintHistoryRepository = FootprintHistory.getRepository();
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
    async getLastFootprint(user) {
      try {
        const footprintHistoryRepository = this.entityManager.getMongoRepository(FootprintHistory);
        console.log(user.id)
        const payment = await footprintHistoryRepository.find({
          where: {
            user_id: {
              $eq: user.id
            }
          },
          order: {
            ['created_at']: "descending",
          }
        });
    
        console.log(payment);
        return payment[0];
      } catch (error) {
        console.error('Error al buscar paytments:', error);
        throw error; // Puedes manejar el error según tus necesidades.
      }
    }
    async remove(id: string) {
      let idObject = new ObjectId(id)
      await FootprintHistory.delete(idObject)
      return `This action removes a #${id} footprintHistory`;
    }
}
