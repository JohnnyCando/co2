import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGlobalConfigDto } from './dto/create-global-config.dto';
import { UpdateGlobalConfigDto } from './dto/update-global-config.dto';
import { GlobalConfig } from './entities/global-config.entity';
const ObjectId = require('mongodb').ObjectId;
@Injectable()
export class GlobalConfigService {
  create(createGlobalConfigDto) {
    let globalConfigyRepository  = Object.assign(new GlobalConfig(), createGlobalConfigDto);
      return globalConfigyRepository.save()
  }

  findAll() {
    return GlobalConfig.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} globalConfig`;
  }

  async update(id: number, updateGlobalConfigDto) {
    let globalConfigyRepository = GlobalConfig.getRepository();
      let idObject = new ObjectId(id)
      const globalConfigModel = await globalConfigyRepository.preload({
        id: idObject,
        ...updateGlobalConfigDto,
      });
      if (!globalConfigModel) {
        throw new NotFoundException(`globalConfig #${id} not found`);
      }
      return globalConfigyRepository.save(globalConfigModel);
  }

  remove(id: number) {
    return `This action removes a #${id} globalConfig`;
  }
}
