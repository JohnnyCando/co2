import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateAppUserDto } from './dto/update-user-app.dto';
import { Auth } from 'src/decorators/auth.decorator';
import { Role } from 'src/common/enums/role.enum';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto) {
    return this.userService.create(createUserDto);
  }
  
  @Auth(Role.CLIENTE)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOneByIdWithOutPassword(id)
  }
  @Auth(Role.CLIENTE)
  @Post('change-password')
  changePassword(@Body() body, @Req() req : Request) {
    const email = req['user'].email
    return this.userService.changePassord(body,email);
  }
  @Auth(Role.CLIENTE)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto:UpdateAppUserDto, @Req() req : Request) {
    const role = req['user'].role
    if(role!==Role.CLIENTE){
      return this.userService.updateBackOffice(id, updateUserDto);
    }else{
      return this.userService.update(id, updateUserDto);
    }
   
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
