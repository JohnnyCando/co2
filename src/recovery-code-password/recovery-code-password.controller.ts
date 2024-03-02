import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Put } from '@nestjs/common';
import { RecoveryCodePasswordService } from './recovery-code-password.service';
import { CreateRecoveryCodePasswordDto } from './dto/create-recovery-code-password.dto';
import { UpdateRecoveryCodePasswordDto } from './dto/update-recovery-code-password.dto';
import { UpdatePasswordApp } from './dto/update-password.dto';

@Controller('recovery-code-password')
export class RecoveryCodePasswordController {
  constructor(private readonly recoveryCodePasswordService: RecoveryCodePasswordService) {}

  @Post()
  create(@Body() createRecoveryCodePasswordDto, @Req() req : Request) {
    let lang = req.headers['lang']
    return this.recoveryCodePasswordService.create(createRecoveryCodePasswordDto,lang);
  }

  @Get()
  findAll() {
    return this.recoveryCodePasswordService.findAll();
  }
  @Get('/password-reset-validate-token/:token')
  async validateToken(@Param('token') token: string){
    return await this.recoveryCodePasswordService.validateToken(token)
  }
  @Post('/password-reset/:token')
  async resetPassword(@Param('token') token: string, @Body() body: UpdatePasswordApp){
    return await this.recoveryCodePasswordService.resetPasswordWithToken(token,body)
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recoveryCodePasswordService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRecoveryCodePasswordDto: UpdateRecoveryCodePasswordDto) {
    return this.recoveryCodePasswordService.update(id, updateRecoveryCodePasswordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recoveryCodePasswordService.remove(id);
  }
}
