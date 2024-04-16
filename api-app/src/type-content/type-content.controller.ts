import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeContentService } from './type-content.service';
import { CreateTypeContentDto } from './dto/create-type-content.dto';
import { UpdateTypeContentDto } from './dto/update-type-content.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('typecontent')
@Controller('type-content')
export class TypeContentController {
  constructor(private readonly typeContentService: TypeContentService) {}

  @Post()
  create(@Body() createTypeContentDto: CreateTypeContentDto) {
    return this.typeContentService.create(createTypeContentDto);
  }

  @Get()
  findAll() {
    return this.typeContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeContentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeContentDto: UpdateTypeContentDto,
  ) {
    return this.typeContentService.update(+id, updateTypeContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeContentService.remove(+id);
  }
}
