import { PartialType } from '@nestjs/swagger';
import { CreateTypeContentDto } from './create-type-content.dto';

export class UpdateTypeContentDto extends PartialType(CreateTypeContentDto) {}
