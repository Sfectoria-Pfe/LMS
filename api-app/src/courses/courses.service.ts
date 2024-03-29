import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoursesService {
   constructor(private readonly prisma:PrismaService){

  }
  create(createCourseDto: CreateCourseDto) {
   return this.prisma.course.create({ data: createCourseDto });
  }

  findAll() {
    return this.prisma.course.findMany({ include: { Lesson: true } });
  }
  findOne(id: number) {
    return this.prisma.course.findUniqueOrThrow({ where: { id } , include: { Lesson: true }  });;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  remove(id: number) {
   return this.prisma.course.delete({ where: { id } });
  }
}
