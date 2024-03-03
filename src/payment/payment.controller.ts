import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Put, Req } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { Role } from 'src/common/enums/role.enum';

@Controller('payment')
@ApiTags('Payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  
  @Get('pdfDownload')
  async generatePDF(@Res() res, @Req() req :Request):Promise<void>{
    let lang = req.headers['lang']
    const buffer = await this.paymentService.generatePDFReceipt(lang,lang)
    res.set({
      'Content-Type':'application/pdf',
      'Content-Disposition':'attachment: filename=ReceiptTest.pdf',
      'Content-Length': buffer.length
    })
    res.end(buffer)
  }
  @Get()
  findAll() {
    return this.paymentService.findAll();
  }
  @Auth(Role.CLIENTE)
  @Get('getLastPayment')
  async getLastPayment(@Req() req : Request){
    let user = req['user']
    return await this.paymentService.findLastPayment(user)

  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePaymentDto) {
    return this.paymentService.update(id, updatePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentService.remove(id);
  }
}
