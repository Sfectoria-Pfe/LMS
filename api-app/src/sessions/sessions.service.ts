import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSessionDto: CreateSessionDto) {
    const { userIds, ...rest } = createSessionDto;
    let data = { ...rest };
    if (userIds)
      data['SessionUser'] = {
        create: userIds.map((elem) => ({ userId: elem })),
      };
    console.log(data, 'data');

    return await this.prisma.session.create({ data });
  }

  findAll() {
    return this.prisma.session.findMany({
      include: {
        program: { include: { ProgramCourse: { include: { course: true } } } },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.session.findUniqueOrThrow({
      where: { id },
      include: {
        Weeks:{include:{ WeekContent:true }},
        program: true, 
        SessionUser: {
          include: { user: { select: { firstName: true, lastName: true,id:true } } },
        }, 
      },
    });
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
