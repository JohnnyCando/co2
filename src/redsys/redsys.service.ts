import { Injectable } from '@nestjs/common';
import { CreateRedsyDto } from './dto/create-redsy.dto';
import { UpdateRedsyDto } from './dto/update-redsy.dto';
const { Redsys } = require('node-redsys-api');
import { PaymentService } from 'src/payment/payment.service';
import fetch from 'node-fetch';
import { Payment } from 'src/payment/entities/payment.entity';

@Injectable()
export class RedsysService {
    constructor(private paymentService : PaymentService){
        
    }
  create(createRedsyDto: CreateRedsyDto) {
    return 'This action adds a new redsy';
  }

  findAll() {
    return `This action returns all redsys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} redsy 1`;
  }

  update(id: number, updateRedsyDto: UpdateRedsyDto) {
    return `This action updates a #${id} redsy 2`;
  }

  remove(user:string) {
    return ' pending'
  }
  async returnOKPayment(Ds_SignatureVersion,Ds_MerchantParameters,Ds_Signature,lang,user_id){
    const redsys = new Redsys();
    let params = redsys.decodeMerchantParameters(Ds_MerchantParameters)
    const signatureIsValid = redsys.merchantSignatureIsValid(Ds_Signature, params);
    if(params.Ds_Response==='0000'){
      let payment = await this.paymentService.update(params.Ds_Order,{state:'PAID'})
      let message  = await this.paymentService.create(payment,lang,user_id)
      return {
        payment,
        message}
    }

  }
  async executeFunctionPayment(project_id,footprint_id, price, percentage_compensation, compensation_amount, lang,user) {
    //Payment create Process
    let data_object = {
      user_id : user.id,
      total_value: price,
      payment_type:'UNICO',
      project_id,
      implication:percentage_compensation,
      state:'PENDNING',
      footprint_id,
      compensation_amount
    }
   
    let payment = await this.paymentService.createPaymentPending(data_object)
    console.log(payment)
    //Redsys Process
    const redsys = new Redsys();
    const mParams = {
      DS_MERCHANT_AMOUNT: price,
      DS_MERCHANT_ORDER: payment.id.toString(),
      DS_MERCHANT_MERCHANTCODE:'999008881',
      DS_MERCHANT_CURRENCY: '978',
      DS_MERCHANT_TRANSACTIONTYPE: '0',
      DS_MERCHANT_TERMINAL: '001',
      DS_MERCHANT_MERCHANTURL: `${process.env.API_HOST}redsys/returFormView`,
      DS_MERCHANT_URLOK: `${process.env.API_HOST}redsys/returnOK`,
      DS_MERCHANT_URLKO: `${process.env.API_HOST}redsys/returnKO`,
      DS_MERCHANT_MERCHANTNAME: 'Huella Co2 APP',
      DS_MERCHANT_CONSUMERLANGUAGE: '001'
    };
    console.log(mParams)
    let merchatParams = await redsys.createMerchantParameters(mParams)
    let signature = await redsys.createMerchantSignature('sq7HjrUOBfKmC576ILgskD5srU870gJ7',mParams)

  return {merchatParams,signature, Ds_SignatureVersion:'HMAC_SHA256_V1'}
}
}
