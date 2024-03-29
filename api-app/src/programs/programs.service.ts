import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProgramsService {
  constructor(private readonly prisma: PrismaService) {
  }
     create(createProgramDto : CreateProgramDto) {
      return this.prisma.program.create({ data: createProgramDto });
    //  return await this.prisma.program.create({
    //    data: dto,
    //  });
    }

    findAll() {
      return this.prisma.program.findMany();;
    }

    findOne(id: number) {
      return this.prisma.program.findUniqueOrThrow({ where: { id } });
    }

    update(id: number, updateProgramDto: UpdateProgramDto) {
      return this.prisma.program.update({
     where: { id },
     data: updateProgramDto,
      });
    }

    remove(id: number) {
      return this.prisma.program.delete({ where: { id }});
    }
  }
