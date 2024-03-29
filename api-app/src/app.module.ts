import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { CoursesModule } from './courses/courses.module';
import { ProgramsModule } from './programs/programs.module';
import { TeachersModule } from './teachers/teachers.module';
import { AuthModule } from './auth/auth.module';
import { SessionsModule } from './sessions/sessions.module';
import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [UsersModule, PrismaModule, CoursesModule, ProgramsModule, TeachersModule, AuthModule, SessionsModule, LessonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
