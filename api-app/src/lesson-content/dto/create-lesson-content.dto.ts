import { ApiProperty } from '@nestjs/swagger';
import { typeContent } from '@prisma/client';
export class CreateLessonContentDto {
  @ApiProperty()
  contentname: string;
  @ApiProperty()
  type: typeContent;
  contentURL: string;
}
