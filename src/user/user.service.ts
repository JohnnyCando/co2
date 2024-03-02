import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

import * as bcryptjs from 'bcryptjs';
import { UpdateAppUserDto } from './dto/update-user-app.dto';
const ObjectId = require('mongodb').ObjectId;
@Injectable()
export class UserService {
  constructor( 
  ){}
  async create(createUserDto) {
    console.log('entre')
    let userRepository  = Object.assign(new User(), createUserDto);
    let userEntity = userRepository.save()
    return userEntity
  }

  findAll() {
    console.log('entre')
    let userRepository = User.getRepository();
    return userRepository.find({select: ['id', 'name', 'email', 'role']})
  }
  findOneByEmailWithPassword(email: string) {
    let userRepository = User.getRepository();
    return userRepository.findOne({
      where: { email },
      select: ['id', 'name', 'email', 'password', 'role'],
    });
  }
  async findOneByIdWithOutPassword(id:string) {
    console.log(id)
    let userRepository = User.getRepository();
    let idObject = new ObjectId(id)
    console.log('object ID',idObject)
    return userRepository.findOne({
      where: idObject,
      select: ['id', 'name', 'email', 'role'],
    });
  } 
  async findOneByEmail(email: string) {
    let userRepository = User.getRepository();
    return await userRepository.findOne({ where:{email},select: ['id', 'name', 'email', 'role'] },);
  }
  async findOne(id: string) {
    console.log(id)
    let idObject = new ObjectId(id)
    return await User.findOneBy(idObject);
  }
  async updateBackOffice(id: string, updateuserDto:UpdateAppUserDto) {
    if(updateuserDto.hasOwnProperty('email')){
      console.log(updateuserDto.email)
      const user = await this.findOneByEmail(updateuserDto.email);

      if (user) {
        throw new BadRequestException('Email already exists');
      }
    }
    if(updateuserDto.hasOwnProperty('password')){
      throw new BadRequestException(`Password can't changed`);
    }
    let userRepository = User.getRepository();
    let idObject = new ObjectId(id)
    const userModel = await userRepository.preload({
      id: idObject,
      ...updateuserDto,
    });
    if (!userModel) {
      throw new NotFoundException(`user #${id} not found`);
    }
    return userRepository.save(userModel);
  }
  async updatePassword(id: string, updateuserDto) {
    let userRepository = User.getRepository();
    let idObject = new ObjectId(id)
    const userModel = await userRepository.preload({
      id: idObject,
      ...updateuserDto,
    });
    if (!userModel) {
      throw new NotFoundException(`user #${id} not found`);
    }
    return userRepository.save(userModel);
  }
  async update(id: string, updateuserDto:UpdateAppUserDto) {
    if(updateuserDto.hasOwnProperty('email')){
      console.log(updateuserDto.email)
      const user = await this.findOneByEmail(updateuserDto.email);

      if (user) {
        throw new BadRequestException('Email already exists');
      }
    }
    if(updateuserDto.hasOwnProperty('password')){
      throw new BadRequestException(`Password can't changed`);
    }
    if(updateuserDto.hasOwnProperty('role')){
      throw new BadRequestException(`role can't changed`);
    }
    let userRepository = User.getRepository();
    let idObject = new ObjectId(id)
    const userModel = await userRepository.preload({
      id: idObject,
      ...updateuserDto,
    });
    if (!userModel) {
      throw new NotFoundException(`user #${id} not found`);
    }
    return userRepository.save(userModel);
  }
  async changePassord(body, email){
    let user = await this.findOneByEmailWithPassword(email);
  
    if (!user) {
      throw new BadRequestException('User not found');
    }
    console.log(body.old_password)
    console.log(user.password)
    const isPasswordValid = await bcryptjs.compare(body.old_password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const hashed_new_password = await bcryptjs.hash(body.new_password,10)
    if(!hashed_new_password){
      throw new BadRequestException('password hashed error');
    }
    user.password = hashed_new_password
    await this.updatePassword(user.id.toString(),user);
    return { message: 'Contraseña cambiada exitosamente.' };
  }
  async remove(id: string) {
    let idObject = new ObjectId(id)
    await User.delete(idObject)
    return `This action removes a #${id} user`;
  }
}
