import { Module } from '@nestjs/common';
import { TypeContentService } from './type-content.service';
import { TypeContentController } from './type-content.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TypeContentController],
  providers: [TypeContentService, PrismaService],
})
export class TypeContentModule {}
