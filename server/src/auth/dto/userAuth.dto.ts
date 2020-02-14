import {IsNotEmpty, IsString} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class UserAuthDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly login: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly password: string;
}