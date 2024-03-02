import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRecoveryCodePasswordDto } from './dto/create-recovery-code-password.dto';
import { UpdateRecoveryCodePasswordDto } from './dto/update-recovery-code-password.dto';
import * as bcryptjs from 'bcryptjs';
import { MailerService } from '@nestjs-modules/mailer';
import sendEmailCodePass from 'src/assets/templates-email-html/send-code-pass/email-template-send-code';
import { InjectRepository } from '@nestjs/typeorm';
import { RecoveryCodePassword } from './entities/recovery-code-password.entity';
import { UserService } from 'src/user/user.service';
const ObjectId = require('mongodb').ObjectId;
import { Repository,EntityManager } from 'typeorm';
@Injectable()
export class RecoveryCodePasswordService {
  
  constructor(
    @InjectRepository(RecoveryCodePassword)
    private readonly repo: Repository<RecoveryCodePassword>,
    private readonly entityManager: EntityManager,
    private readonly usersService: UserService,
    private readonly mailerService: MailerService,
    ) {}
  async create(createRecoveryCodePasswordDto,lang) {
    console.log(lang)
    //Validar email existente
    const user = await this.usersService.findOneByEmail(createRecoveryCodePasswordDto.email);
    if(user){
   // generar code temporal
    let recoveryCodeObject = {
      token: (Math.floor(Math.random() * 9000 + 1000)).toString(),
      user_id: user.id,
      user_email: user.email

    }
    try{
      let recoveryCodeRepository  = Object.assign(new RecoveryCodePassword(), recoveryCodeObject);
      let codeTemp = await  recoveryCodeRepository.save()
      console.log(codeTemp)
      let sendEmail = await this.sendVerifyCode(codeTemp,user.name,lang)
      if(sendEmail){
        return { message: 'Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña.' }
      }else{
        return { message: 'Ha ocurrido un error al enviar el correo electrónico.' }
      }
    }catch(error){
      console.log(error)
      return {
        message:'Ha ocurrido une rror al general codigo temporal',
        error
      }
    }
    
    }else{
      return {message:'El email no existe en nuestros datos.'};
    }
   
      
    
  }
  async validateToken(token:string){
    let passwordResetTokenRepository = this.entityManager.getMongoRepository(RecoveryCodePassword);
    const expectedExpireAt = new Date();
    console.log(token)
    const passwordResetToken = await passwordResetTokenRepository.findOne({
      where: {
        token,
        expire_at: {
          $gt: new Date(),
        }
      },
    });
    console.log(passwordResetToken)
    console.log(expectedExpireAt)
    if (!passwordResetToken) {
      throw new BadRequestException('Token inválido o expirado');
    }
  
    return { message: 'Token Autorizado' };
  }
  async resetPasswordWithToken(token:string,body){
    let passwordResetTokenRepository = this.entityManager.getMongoRepository(RecoveryCodePassword);
    const expectedExpireAt = new Date();
    console.log(token)
    const passwordResetToken = await passwordResetTokenRepository.findOne({
      where: {
        token,
        expire_at: {
          $gt: new Date(),
        }
      },
    });
    console.log(passwordResetToken)
    console.log(expectedExpireAt)
    if (!passwordResetToken) {
      throw new BadRequestException('Token inválido o expirado');
    }
  
    const user = await this.usersService.findOneByEmail(passwordResetToken.user_email);
    console.log(body.password)
    
    const hashedPassword = await bcryptjs.hash(body.password, 10);
    console.log(hashedPassword)
    user.password = hashedPassword;
    await this.usersService.updatePassword(user.id.toString(),user);
  
    await this.remove(passwordResetToken.id.toString());
  
    return { message: 'Contraseña restablecida correctamente.' };
  }
  findAll() {
    return `This action returns all recoveryCodePassword`;
  }

  findOne(id: string) {
    return `This action returns a #${id} recoveryCodePassword`;
  }

  update(id: string, updateRecoveryCodePasswordDto: UpdateRecoveryCodePasswordDto) {
    return `This action updates a #${id} recoveryCodePassword`;
  }

  async remove(id: string) {
    let idObject = new ObjectId(id)
    await RecoveryCodePassword.delete(idObject)
    return `This action removes a #${id} recoveryCodePassword`;
  }
  async sendVerifyCode(object,name,lang) {
    const emailString = await sendEmailCodePass(
      name,
      object.token,
      lang
    );
    return await this.mailerService.sendMail({
      to: object.user_email,
      from: 'infogfmemories@gmail.com',
      subject: 'Código de verificación',
      text: 'welcome',
      html: await emailString,
    });
  }
}
