import { ApiProperty } from '@nestjs/swagger';
export class CreateTypeContentDto {
  @ApiProperty()
  pdf?: String;
  @ApiProperty()
  pdfName?: String;
  @ApiProperty()
  video?: String;
  @ApiProperty()
  exercises?: String;
  @ApiProperty()
  exericesName?: String;
  @ApiProperty()
  project?: String;
  @ApiProperty()
  projectName?: String;
  @ApiProperty()
  checkpoint?: String;
  @ApiProperty()
  checkpointName?: String;
}