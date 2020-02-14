import {IsString} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateBlogDto {

    userId: string;

    @ApiProperty()
    @IsString()
    readonly description: string;

    createDate: string;
}