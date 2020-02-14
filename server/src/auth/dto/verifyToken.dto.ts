import {IsNotEmpty, IsString} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
import {Token} from "../../token/types/token.type";

export class VerifyTokenDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly token: Token;

}