import { Injectable } from '@nestjs/common';
import { CreateTypeContentDto } from './dto/create-type-content.dto';
import { UpdateTypeContentDto } from './dto/update-type-content.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TypeContentService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTypeContentDto: CreateTypeContentDto) {
    return this.prisma.typeContent.create({ data: CreateTypeContentDto });
    
  }

  findAll() {
   return this.prisma.typeContent.findMany();
  }

  findOne(id: number) {
    return this.prisma.typeContent.findUniqueOrThrow({ where: { id }  });
  
  }

  update(id: number, updateTypeContentDto: UpdateTypeContentDto) {
    return this.prisma.course.update({
      where: { id },
      data: updateTypeContentDto,
    });
  }

  remove(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }
}
