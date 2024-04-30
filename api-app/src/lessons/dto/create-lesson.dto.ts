import { ApiProperty } from '@nestjs/swagger';
import { typeContent } from '@prisma/client';

export class CreateLessonDto {
  @ApiProperty()
  imageURL: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  courseId: number;
  
  contents: Content[];
}
class Content {
  contentname: string;
  type: typeContent;
  contentExercice: string;
  contentURL: string;
}
