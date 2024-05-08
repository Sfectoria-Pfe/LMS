import { PrismaClient } from '@prisma/client';
import { dataCourses } from './data';
import { dataPrograms } from './Forfaits';
import { dataTeachers } from './TEACHERS';
import { SessionData } from './SessionData';
import { dataUser } from './Userdata';
import { LessonData } from './lesson';
import { WeeksData } from './Weeks';
import * as bcrypt from 'bcrypt';
import { content } from './content';
import e from 'express';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const courses = await prisma.course.createMany({
    data: dataCourses,
  });
  const programs = await prisma.program.createMany({
    data: dataPrograms,
  });
  const teachers = await prisma.teacher.createMany({
    data: dataTeachers,
  });

  const usersdatahush = await Promise.all(
    dataUser.map(async (dto) => {
      const { password, ...rest } = dto;
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      // This action adds a new user
      return { password: hashedPassword, ...rest };
    }),
  );
  const users = await prisma.user.createMany({
    data: usersdatahush,
  });
  const lessons = await prisma.lesson.createMany({
    data: LessonData,
  });
  const lessonContent = await prisma.lessonContent.createMany({
    data: content,
  });
  const sessions = await prisma.session.createMany({
    data: SessionData.map((elem) => ({
      ...elem,
      SessionUser: { create: [elem.SessionUser.create.map((s) => s)] },
    })),
  });

  console.log('seeded');
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
