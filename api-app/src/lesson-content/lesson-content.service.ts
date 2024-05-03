import { Injectable } from '@nestjs/common';
import { CreateLessonContentDto } from './dto/create-lesson-content.dto';
import { UpdateLessonContentDto } from './dto/update-lesson-content.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LessonContentService {
  constructor(private readonly prisma: PrismaService) { }
  create(createLessonContentDto: CreateLessonContentDto) {
    return this.prisma.lessonContent.create({ data: createLessonContentDto });
  }

  findAll() {
    return this.prisma.lessonContent.findMany();
  }

  findOne(id: number) {
    return this.prisma.lessonContent.findUniqueOrThrow({
      where: { id }
    });
  }

  update(id: number, updateLessonContentDto: UpdateLessonContentDto) {
    return this.prisma.lessonContent.update({
      where: { id },
      data: updateLessonContentDto,
    });
  }

  remove(id: number) {
    return this.prisma.lessonContent.delete({ where: { id } });
  }
}
