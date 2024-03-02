import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Req } from '@nestjs/common';
import { TextDataViewConfigService } from './text-data-view-config.service';
import { CreateTextDataViewConfigDto } from './dto/create-text-data-view-config.dto';
import { UpdateTextDataViewConfigDto } from './dto/update-text-data-view-config.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Text Global APP')
@Controller('text-data-view-config')
export class TextDataViewConfigController {
  constructor(private readonly textDataViewConfigService: TextDataViewConfigService) {}

  @Post()
  create(@Body() createTextDataViewConfigDto) {
    return this.textDataViewConfigService.create(createTextDataViewConfigDto);
  }
  @Post('getCountlang')
  async findCountObjectES(@Body() body){
    let identifyCode = body.identifyCode
    let lang = body.lang
    return this.textDataViewConfigService.findObjetcCountES(identifyCode,lang)
  }
  @Get()
  findAll() {
    return this.textDataViewConfigService.findAll();
  }
  @Get('findWithLang/:type_text')
  findAllWithLanguage(@Req() req: Request, @Param('type_text') type_text:string) {
    let lang = req.headers['lang']
    return this.textDataViewConfigService.findAllWithLanguage(lang,type_text);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textDataViewConfigService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTextDataViewConfigDto) {
    return this.textDataViewConfigService.update(id, updateTextDataViewConfigDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textDataViewConfigService.remove(id);
  }
}
