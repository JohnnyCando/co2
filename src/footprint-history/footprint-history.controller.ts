import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Req } from '@nestjs/common';
import { FootprintHistoryService } from './footprint-history.service';
import { CreateFootprintHistoryDto } from './dto/create-footprint-history.dto';
import { UpdateFootprintHistoryDto } from './dto/update-footprint-history.dto';
import { ApiTags } from '@nestjs/swagger';
import { Role } from 'src/common/enums/role.enum';
import { Auth } from 'src/decorators/auth.decorator';
@ApiTags('Footprint History')
@Controller('footprint-history')
export class FootprintHistoryController {
  constructor(private readonly footprintHistoryService: FootprintHistoryService) {}
  @Auth(Role.CLIENTE)
  @Post()
  create(@Body() createFootprintHistoryDto, @Req() req:Request) {
    createFootprintHistoryDto.user_id = req['user'].id
    return this.footprintHistoryService.create(createFootprintHistoryDto);
  }
  @Auth(Role.CLIENTE)
  @Get()
  findAll() {
    return this.footprintHistoryService.findAll();
  }
  @Auth(Role.CLIENTE)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.footprintHistoryService.findOne(id);
  }
  @Auth(Role.CLIENTE)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateFootprintHistoryDto) {
    return this.footprintHistoryService.update(id, updateFootprintHistoryDto);
  }

  @Auth(Role.CLIENTE)
  @Get('find/last-footprint')
  async getLastFootprint(@Req() req : Request){
    console.log('entreee')
    let user = req['user']
    return await this.footprintHistoryService.getLastFootprint(user)

  }
  @Auth(Role.CLIENTE)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.footprintHistoryService.remove(id);
  }
}
