import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Put, Query } from '@nestjs/common';
import { RedsysService } from './redsys.service';
import { CreateRedsyDto } from './dto/create-redsy.dto';
import { UpdateRedsyDto } from './dto/update-redsy.dto';
import { Role } from 'src/common/enums/role.enum';
import { Auth } from 'src/decorators/auth.decorator';
import { get } from 'http';

@Controller('redsys')
export class RedsysController {
  constructor(private readonly redsysService: RedsysService) {}

  @Post()
  create(@Body() createRedsyDto: CreateRedsyDto) {
    return this.redsysService.create(createRedsyDto);
  }

  @Get()
  async findAll() {
    return this.redsysService.findAll()
  }
  @Auth(Role.CLIENTE)
  @Post('returnKO')
  async returnedRedsysKO(@Req() req: Request) {
    let user = req['user']
    return 'exitoso'
  }
  @Auth(Role.CLIENTE)
  @Post('/returnOK')
  async returnedRedsysOK(@Req() req: Request,@Body() body,) {
      let user = req['user']
      let lang = req.headers['lang']
      
      const {url } = body
      const paramsSplit = url.split('?')[1]
      const redsysDataSplit = paramsSplit.split('&')
      const Ds_SignatureVersion = redsysDataSplit[0].split('Ds_SignatureVersion=')[1]
      const Ds_MerchantParameters = redsysDataSplit[1].split('Ds_MerchantParameters=')[1]
      const Ds_Signature = redsysDataSplit[2].split('Ds_Signature=')[1]

    return await this.redsysService.returnOKPayment(Ds_SignatureVersion,Ds_MerchantParameters,Ds_Signature,lang,user);
  }
@Post('returFormView/:lang/:user')
  async returnedRedsysProcessOK(@Param('lang') lang:string,@Param('user') user:string ,@Req() req: Request, @Body() body) {
    const {Ds_SignatureVersion, Ds_MerchantParameters,Ds_Signature} = body
    return await this.redsysService.returnOKPayment(Ds_SignatureVersion,Ds_MerchantParameters,Ds_Signature,lang,user);
  }
  @Auth(Role.CLIENTE)
  @Post('genereteForm')
  async genereateFormViewPayment(@Body() body, @Req() req: Request) {
    let  lang = req.headers['lang']  
    let {footprint_id,price,percentage_compensation,compensation_amount,project_id} = body
      return await this.redsysService.executeFunctionPayment(project_id,footprint_id, price, percentage_compensation, compensation_amount,lang,req['user']);
    }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRedsyDto: UpdateRedsyDto) {
    return this.redsysService.update(+id, updateRedsyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    /* return this.redsysService.remove(+id);*/
  }
}
