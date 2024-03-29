import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSessionDto: CreateSessionDto) {
    return this.prisma.session.create({ data: createSessionDto });
  }

  findAll() {
    return this.prisma.session.findMany({
      include: {
        program: { include: { ProgramCourse: { include: { course: true } } } },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.session.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return this.prisma.session.update({
      where: { id },
      data: updateSessionDto,
    });
  }

  remove(id: number) {
    return this.prisma.session.delete({ where: { id } });
  }
}
