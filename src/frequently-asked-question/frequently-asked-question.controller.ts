import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Put } from '@nestjs/common';
import { FrequentlyAskedQuestionService } from './frequently-asked-question.service';
import { CreateFrequentlyAskedQuestionDto } from './dto/create-frequently-asked-question.dto';
import { UpdateFrequentlyAskedQuestionDto } from './dto/update-frequently-asked-question.dto';

@Controller('frequently-asked-question')
export class FrequentlyAskedQuestionController {
  constructor(private readonly frequentlyAskedQuestionService: FrequentlyAskedQuestionService) {}

  @Post()
  create(@Body() createFrequentlyAskedQuestionDto: CreateFrequentlyAskedQuestionDto) {
    return this.frequentlyAskedQuestionService.create(createFrequentlyAskedQuestionDto);
  }

  @Get()
  findAll() {
    return this.frequentlyAskedQuestionService.findAll();
  }
  @Get('findWithLang')
  findAllWithLanguage(@Req() req: Request) {
    let lang = req.headers['lang']
    return this.frequentlyAskedQuestionService.findAllWithLanguage(lang);
  }
  @Post('getCountlang')
  async findCountObjectES(@Body() body){
    let identifyCode = body.identifyCode
    let lang = body.lang
    return this.frequentlyAskedQuestionService.findObjetcCountES(identifyCode,lang)
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frequentlyAskedQuestionService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFrequentlyAskedQuestionDto: UpdateFrequentlyAskedQuestionDto) {
    return this.frequentlyAskedQuestionService.update(id, updateFrequentlyAskedQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frequentlyAskedQuestionService.remove(id);
  }
}
