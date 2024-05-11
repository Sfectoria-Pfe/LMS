import { ApiProperty } from '@nestjs/swagger';
import {  typeContent } from '@prisma/client';
export class Answer {
  label: string;
  isCorrect: boolean;
}
export class Question {
  name?: string;
  label: string;
  scale: number;
  propositions?: Answer[];
}
export class Content {
  contentname: string;
  type: typeContent;
  contentURL: string;
  questions?: Question[];
}
export class CreateLessonDto {
  @ApiProperty()
  imageURL: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  courseId: number;

  contents?: Content[];
}




