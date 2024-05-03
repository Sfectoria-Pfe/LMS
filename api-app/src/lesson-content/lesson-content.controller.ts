import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LessonContentService } from './lesson-content.service';
import { CreateLessonContentDto } from './dto/create-lesson-content.dto';
import { UpdateLessonContentDto } from './dto/update-lesson-content.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('lessonContent')
@Controller('lesson-content')
export class LessonContentController {
  constructor(private readonly lessonContentService: LessonContentService) {}

  @Post()
  create(@Body() createLessonContentDto: CreateLessonContentDto) {
    return this.lessonContentService.create(createLessonContentDto);
  }

  @Get()
  findAll() {
    return this.lessonContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonContentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLessonContentDto: UpdateLessonContentDto,
  ) {
    return this.lessonContentService.update(+id, updateLessonContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonContentService.remove(+id);
  }
}
