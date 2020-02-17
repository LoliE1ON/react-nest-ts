import {IsString} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class GetUserDto {

    @ApiProperty({
        description: 'User login',
    })
    @IsString()
    login: string;
}
