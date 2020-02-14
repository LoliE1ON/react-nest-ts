import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IToken } from './interfaces/token.interface';
import { CreateTokenDto } from './dto/createToken.dto';
import {Token} from "./types/token.type";

@Injectable()
export class TokenService {

    constructor(@InjectModel('Token') private readonly tokenModel: Model<IToken>) {
    }

    // Create new token
    async create(createTokenDto: CreateTokenDto): Promise<IToken> {
        const token = new this.tokenModel(createTokenDto);
        return await token.save();
    }

    // Delete token
    async delete(userId: string, token: string): Promise<{ ok?: number, n?: number }> {
        return await this.tokenModel.deleteOne({ userId, token });
    }

    // Check token
    async exists(userId: string, token: string): Promise<boolean> {
        return await this.tokenModel.exists({ userId, token });
    }

    // Check token
    async get(token: Token): Promise<IToken> {
        return await this.tokenModel.findOne({ token }).exec();
    }

}
