import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity'
import { join,resolve } from 'path';
import { throwError } from 'rxjs';
import * as fs from 'fs';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/user/entities/user.entity';
const PDFDocument = require('pdfkit-table')
const ObjectId = require('mongodb').ObjectId
const { writeFile } = require('fs/promises');

@Injectable()
export class PaymentService {
  constructor( @InjectRepository(Payment)
  private readonly repo: Repository<Payment>,
  private readonly entityManager: EntityManager, 
    private readonly mailerService: MailerService
    ){}
    async createPaymentPending(createpaymentDto) {
      console.log(createpaymentDto)
      let paymentRepository  = Object.assign(new Payment(), createpaymentDto);
      return await  paymentRepository.save()
    }
    async create(createpaymentDto,lang,user_id) {
      let idObject = new ObjectId(user_id)
     const user = await User.findOneBy(idObject);
      if(createpaymentDto){
        const tempFilePath = await this.createReceiptandEmail(lang,createpaymentDto)
        console.log(tempFilePath)
         await this.sendEmailPDF(tempFilePath,user,lang,createpaymentDto.id)
      }else{
        throw new NotFoundException(`Error al intentar enviar la compensación`);
      }
      return {message:'Email send succesfully'}
    }
  async createReceiptandEmail(lang,payment){
    let pdfBuffer = await this.generatePDFReceipt(lang,payment)
    const rutaDeseada = resolve(__dirname, '..', '..', '..');
    const finalRoute = `${rutaDeseada}/files/`;
    const rutaArchivo = join(
      finalRoute,
      `${payment.id}.pdf`,
    );
    if (!fs.existsSync(finalRoute)) {
      fs.mkdirSync(finalRoute, { recursive: true }); // Crea la carpeta y sus subdirectorios de forma recursiva
    }
    console.log(rutaArchivo)
    const tempFilePath = await writeFile(rutaArchivo, pdfBuffer);
    return rutaArchivo
  }
  async sendEmailPDF(tempFilePath,user,lang,id) {
    console.log('entre')
    let subject_text 
    let text_first
    let html_text
    switch(lang){
      case 'es':
        console.log('entre')
        html_text=`<b>Adjuntamos el recibo en formato PDF en este correo.</b>`
        text_first = 'Gracias'
        subject_text= 'Gracias por la compensación'
        break;
      case 'en':
        subject_text= 'Thank you for you compesation'
        text_first= 'welcome'
        html_text= `<b>We attach the receipt in PDF format to this email.</b>`
        break;
      case 'ca':
        subject_text= 'Gracies per la seva compensació'
        text_first= 'welcome'
        html_text= `<b>Adjuntem el rebut en format PDF en aquest correu.</b>`
        break;
      case 'gl':
        subject_text= 'Grazas pola túa compensación'
        text_first= 'welcome'
        html_text= `<b>Adxuntamos a este correo electrónico o recibo en formato PDF.</b>`
        break;
      case 'eu':
        subject_text= 'Eskerrik asko zure kalte-ordainagatik'
        text_first= 'welcome'
        html_text= `<b>Ordainagiria PDF formatuan eransten diogu mezu elektroniko honi.</b>`
        break;
      default:
        break;
    }
    return await this.mailerService.sendMail({
      to: user.email,
      from: 'infogfmemories@gmail.com',
      subject: subject_text,
      text: text_first,
      attachments: [{
        filename: `${id}_compensation.pdf`,
        path: tempFilePath,
        contentType: 'application/pdf',
      }],
      html: html_text,
    });
    
  }
    findAll() {
      return Payment.find()
    }
    async generatePDFReceipt(lang,payment): Promise<Buffer> {
      console.log(payment)
      let text_legal_bottom = 'En vista del cumpliemiento de la normativa europea 2016/679 sobre Protección de datos (RGPD) le informamos que el tratamiento de los datos proporcionados por Ud. será responsabilidad de (Nombre de repsonsables, representantes o delegados de tratamiento) con el objetivo de ( Finalidad del Tratamiento), y que además se compromete.'
      let text_header_label_user='Datos Usuario'
      let text_header_label_acciona='Datos fiscales Acciona'
      let text_thank_purshed = 'Muchas gracias por tu contribución de tu huella de CO2, gracias a tu ayuda creamos un mundo mejor.'
      let text_table = {
        text_label_header:'Detalles de la compensación',
        text_headers_options: {
          text_compensation:'Huella Compensada',
          text_implication:'Implicación',
          text_total:'Total'
        }
      }
      switch(lang){
        case 'es':
          console.log('entre')
          text_legal_bottom = 'En vista del cumpliemiento de la normativa europea 2016/679 sobre Protección de datos (RGPD) le informamos que el tratamiento de los datos proporcionados por Ud. será responsabilidad de (Nombre de repsonsables, representantes o delegados de tratamiento) con el objetivo de ( Finalidad del Tratamiento), y que además se compromete.'
          text_header_label_user='Datos Usuario'
          text_header_label_acciona='Datos fiscales Acciona'
          text_thank_purshed = 'Muchas gracias por tu contribución de tu huella de CO2, gracias a tu ayuda creamos un mundo mejor.'
          text_table = {
          text_label_header:'Detalles de la compensación',
          text_headers_options: {
            text_compensation:'Huella Compensada',
            text_implication:'Implicación',
            text_total:'Total'
          }
        }
        break;
        case 'en':
          text_legal_bottom = 'In view of compliance with European regulations 2016/679 on Data Protection (RGPD), we inform you that the processing of the data provided by you will be the responsibility of (Name of controllers, representatives or data processing delegates) with the aim of ( Purpose of the Treatment), and that is also committed.'
          text_header_label_user='Data User'
          text_header_label_acciona='Data prosecutors Acciona'
          text_thank_purshed = 'Thank you very much for your contribution of your CO2 footprint, thanks to your help we create a better world.'
          text_table = {
          text_label_header:'Compensation details',
          text_headers_options: {
            text_compensation:'Compensated Footprint',
            text_implication:'Implication',
            text_total:'Total'
          }
        }
        break;
        case 'ca':
          text_legal_bottom = `En vista del compliment de la normativa europea 2016/679 sobre Protecció de dades (RGPD) us informem que el tractament de les dades proporcionades per vostè serà responsabilitat de (Nom de responsables, representants o delegats de tractament) amb l'objectiu de ( Finalitat del Tractament), i que a més es compromet.`
          text_header_label_user='Dades Usuari'
          text_header_label_acciona='Dades fiscals Acciona'
          text_thank_purshed = 'Moltes gràcies per la vostra contribució de la vostra empremta de CO2, gràcies a la vostra ajuda creem un món millor.'
          text_table = {
          text_label_header:'Detalls de la compensació',
          text_headers_options: {
            text_compensation:'Petjada Compensada',
            text_implication:'Implicació',
            text_total:'Total'
          }
        }
        break;
        case 'gl':
          text_legal_bottom = 'En vista do cumprimento da normativa europea 2016/679 de Protección de Datos (RGPD), informámoslle que o tratamento dos datos que nos facilite será responsabilidade de (Nome dos responsables, representantes ou delegados de tratamento de datos) co fin de (Finalidade do Tratamento), e que tamén se compromete.'
          text_header_label_user='Datos do usuario'
          text_header_label_acciona='Datos fiscais Acciona'
          text_thank_purshed = 'Moitas grazas pola túa contribución á túa pegada de CO2, grazas á túa axuda creamos un mundo mellor.'
          text_table = {
          text_label_header:'Detalles de compensación',
          text_headers_options: {
            text_compensation:'Pegada compensada',
            text_implication:'Implicación',
            text_total:'Total'
          }
        }
        break;
        case 'eu':
          text_legal_bottom = 'Datuen Babesari buruzko 2016/679 Europako araudia (RGPD) betetzen dela, jakinarazten dizugu zuk emandako datuen tratamendua (arduradunen, ordezkarien edo datuen tratamenduaren ordezkarien izena) izango dela, helburu honekin. (Tratamenduaren Xedea), eta hori ere konpromisoa hartzen da».'
          text_header_label_user='Erabiltzailearen datuak'
          text_header_label_acciona='zerga datuak Acciona'
          text_thank_purshed = 'Mila esker zure CO2 aztarnaren ekarpenagatik, zure laguntzari esker mundu hobea sortzen dugu.'
          text_table = {
          text_label_header:'Konpentsazio xehetasunak',
          text_headers_options: {
            text_compensation:'Konpentsatutako Aztarna',
            text_implication:'Inplikazioa',
            text_total:'Guztira'
          }
        }
        break;
        default:
          break;
      }
      const pdfBuffer: Buffer = await new Promise(resolve => {
        const doc = new PDFDocument(
          {
            size: "LETTER",
            bufferPages: true,
            autoFirstPage:false,
          })
  
        let pageNumber = 0;
        doc.on('pageAdded', () => {
          pageNumber++
          let bottom = doc.page.margins.bottom;
  

            doc.image(join(process.cwd(), "src/assets/images/logo_acciona.png"), doc.page.width - 100, 5, { fit: [60, 60], align: 'center' })
            doc.moveTo(50, 55)
              .lineTo(doc.page.width - 50, 55)
              .stroke();
  
          doc.page.margins.bottom = 0;
          doc.font("Helvetica").fontSize(10);
          doc.text(
            text_legal_bottom,
            0.5 * (doc.page.width -450),
            doc.page.height - 50,{
              align: 'left',
              lineBreak: true,
            })

          doc.font("Helvetica").fontSize(14);
          
            doc.moveTo(0.5 * (doc.page.width -450), doc.page.height - 65)
            .lineTo(doc.page.width -50, doc.page.height - 65)
            .stroke();
            
          doc.page.margins.bottom = bottom;
        })
        
  
  
        doc.addPage();
       
        
        doc.text('', 50, 70)
        doc.text(`${new Date().toLocaleDateString()}`,400, 70)
        doc.text(text_header_label_user,400, 100)
        doc.text(text_header_label_acciona,50, 100)
        doc.fontSize(24);
        doc.moveDown();
        doc.font("Helvetica").fontSize(16);
        doc.moveDown();
        doc.font("Helvetica").fontSize(14);
        doc.text(text_thank_purshed);
        doc.moveDown()
        const table = {
          title: text_table.text_label_header,
          subtitle: " ",
          headers: [`${text_table.text_headers_options.text_compensation}`,`${text_table.text_headers_options.text_implication}`,`${text_table.text_headers_options.text_total}`],
          rows: [[`${payment.compensation_amount}`,`${payment.implication}`,`${payment.total_value / 100}€`]]
        };
        const styles = {
          header: {
            fontSize: 20,
          },
          row: {
            fontSize: 14,
          },
        };
        doc.table(table, {
          prepareHeader: () => doc.font("Helvetica-Bold").fontSize(14),
          prepareRow: () => doc.font("Helvetica-Bold").fontSize(12),
          columnsSize: [ 200,160,100,50],
        });
  
  
        const buffer = []
        doc.on('data', buffer.push.bind(buffer))
        doc.on('end', () => {
          const data = Buffer.concat(buffer)
          resolve(data)
        })
        doc.end()
  
  
      })
  
      return pdfBuffer;
    }
    async findOne(id: string) {
      console.log(id)
      let idObject = new ObjectId(id)
      return await Payment.findOneBy(idObject);
    }
  async findLastPayment(user) {
    try {
      const paymentRepository = this.entityManager.getMongoRepository(Payment);
      console.log(user.id)
      const payment = await paymentRepository.find({
        where: {
          user_id: {
            $eq: user.id
          },
          state: {
            $eq:'PAID'
          }
        },
        order: {
          ['created_at']: "descending",
        }
      });
  
      console.log(payment);
      return payment[0];
    } catch (error) {
      console.error('Error al buscar paytments:', error);
      throw error; // Puedes manejar el error según tus necesidades.
    }
  }
    async update(id: string, updatepaymentDto) {
      let paymentRepository = Payment.getRepository();
      let idObject = new ObjectId(id)
      const paymentModel = await paymentRepository.preload({
        id: idObject,
        ...updatepaymentDto,
      });
      if (!paymentModel) {
        throw new NotFoundException(`payment #${id} not found`);
      }
      return paymentRepository.save(paymentModel);
    }
  
    async remove(id: string) {
      let idObject = new ObjectId(id)
      await Payment.delete(idObject)
      return `This action removes a #${id} payment`;
    }
}
