import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWeekDto {
    @ApiProperty()
    @IsNotEmpty()
    title: string;
    @ApiProperty()
    sessionId: number;
    @ApiProperty({ type: [Number] })
        
    contentweek?: number[];

}
