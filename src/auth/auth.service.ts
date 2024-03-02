import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import { MailerService } from '@nestjs-modules/mailer';
import sendEmailWelcome from 'src/assets/templates-email-html/welcome/email-template-welcome';
@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,) {}

    async loginWithToken(id){
      console.log(id)
      let user = await this.usersService.findOneByIdWithOutPassword(id)
      const payload = { id:user.id,email: user.email, role: user.role, name:user.name };
    const token = await this.jwtService.signAsync(payload);
      return {
        user:user,
        token:token
      }
    }
    async registerBackOffice(registerDto) {
      const user = await this.usersService.findOneByEmail(registerDto.email.toLowerCase());
  
      if (user) {
        throw new BadRequestException('Email already exists');
      }
  
      const hashedPassword = await bcryptjs.hash(registerDto.password, 10);
      try{
        const userFinal = await this.usersService.create({
          name:registerDto.name,
          email :registerDto.email,
          password: hashedPassword,
          role:registerDto.role
        })
        if(userFinal){
          return {
            message:'User created successfully',
          }
        }
        
      }catch(error){
        return {
          message: 'User created failed',
        };
        
      }
    }
  async register(registerDto) {
    const user = await this.usersService.findOneByEmail(registerDto.email.toLowerCase());

    if (user) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcryptjs.hash(registerDto.password, 10);
    try{
      const userFinal = await this.usersService.create({
        name:registerDto.name,
        email :registerDto.email.toLowerCase(),
        password: hashedPassword,
        role:registerDto.role
      });
      let loginDTO = new LoginDto
      loginDTO = {
        email: registerDto.email.toLowerCase(),
        password: registerDto.password
      }
      if(userFinal){
        const loginData = await this.login(loginDTO)
        console.log(loginData)
        return {
          message:'User created successfully',
          user : loginData.user,
          token: loginData.token
        }
      }
    }catch(error){
      return {
        message: 'User created failed',
      };
      
    }
  }
  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findOneByEmailWithPassword(email.toLowerCase());

    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    const payload = { id:user.id,email: user.email, role: user.role, name:user.name };
    const token = await this.jwtService.signAsync(payload);
   await delete user.password
    return {
      message:'Login Succesfully',
      user: user,
      token:token
    };
  }
  async sendWelcomeEmail(object) {
    const emailString = await sendEmailWelcome(
      object.account_name,object.lang
    );
    return await this.mailerService.sendMail({
      to: object.email,
      from: 'infogfmemories@gmail.com',
      subject: 'Bienvenido a Huella CO2',
      text: 'welcome',
      html: await emailString,
    });
  }
}
