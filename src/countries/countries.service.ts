import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
const ObjectId = require('mongodb').ObjectId;

@Injectable()
export class CountriesService {
  create(createCountryDto) {
    let createCountryRepository  = Object.assign(new Country(), createCountryDto);
      return createCountryRepository.save()
  }

  findAll() {
    return Country.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  async update(id: number, updateCountryDto) {
    let createCountryRepository = Country.getRepository();
    let idObject = new ObjectId(id)
    const countryModel = await createCountryRepository.preload({
      id: idObject,
      ...updateCountryDto,
    });
    if (!countryModel) {
      throw new NotFoundException(`countryModel #${id} not found`);
    }
    return createCountryRepository.save(countryModel);
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
