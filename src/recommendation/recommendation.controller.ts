import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Req } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { UpdateRecommendationDto } from './dto/update-recommendation.dto';

@Controller('recommendation')
export class RecommendationController {
  constructor(private readonly recommendationService: RecommendationService) {}

  @Post()
  create(@Body() createRecommendationDto: CreateRecommendationDto) {
    return this.recommendationService.create(createRecommendationDto);
  }
  @Get('findWithLang')
  findAllWithLanguage(@Req() req: Request) {
    let lang = req.headers['lang']
    return this.recommendationService.findAllWithLanguage(lang);
  }
  @Post('getCountlang')
  async findCountObjectES(@Body() body){
    let identifyCode = body.identifyCode
    let lang = body.lang
    return this.recommendationService.findObjetcCountES(identifyCode,lang)
  }
  @Get()
  findAll() {
    return this.recommendationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recommendationService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRecommendationDto: UpdateRecommendationDto) {
    return this.recommendationService.update(id, updateRecommendationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recommendationService.remove(id);
  }
}
