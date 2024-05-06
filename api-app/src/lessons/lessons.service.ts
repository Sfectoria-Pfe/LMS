import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { create } from 'domain';

@Injectable()
export class LessonsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createLessonDto: CreateLessonDto) {
    const { contents, ...rest } = createLessonDto;
    let data = { ...rest };
    // if (contents) data['LessonContent'] = { create: contents };
    return this.prisma.lesson.create({
      data: {
        ...rest,
        LessonContent: {
          create : contents.map((elem) => {
            if (elem.type === 'checkpoint') {
              return {
                contentname: elem.contentname,
                type: 'checkpoint',
                questions: {
                  create: elem.questions.map((el) => ({
                    scale: el.scale,
                    label: el.label,
                    propositions: {
                      create: el.propositions.map((p) => ({
                        isCorrect: p.isCorrect,
                        label: p.label,
                      })),
                    },
                  })),
                },
              };
            } else {
              const { questions, ...restElem } = elem;
              return restElem;
            }
          }),

        },
      },
    });
  }

  findAll() {
    return this.prisma.lesson.findMany({ include: { LessonContent: true } });
  }

  findOne(id: number) {
    return this.prisma.lesson.findUniqueOrThrow({
      where: { id },
      include: { LessonContent: true },
    });
  }

  update(id: number, updateLessonDto: UpdateLessonDto) {
    return this.prisma.lesson.update({
      where: { id },
      data: updateLessonDto,
    });
  }

  remove(id: number) {
    return this.prisma.lesson.delete({ where: { id } });
  }
}
