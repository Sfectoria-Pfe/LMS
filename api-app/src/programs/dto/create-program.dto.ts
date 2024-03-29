import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProgramDto {
    @ApiProperty()
    @IsNotEmpty()
    title:  string;
    @ApiProperty()
    @IsNotEmpty()
    description : string;
    @ApiProperty()
    @IsNotEmpty()
    duration :string;
    @ApiProperty()
    @IsNotEmpty()
    imageURL: string;
    @ApiProperty() 
    @IsNumber()
    price: number;

}
