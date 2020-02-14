import {HttpException, HttpStatus} from '@nestjs/common';

export class VerifyTokenError extends HttpException {
    constructor() {
        super({error: 'Access token is incorrect'}, HttpStatus.FORBIDDEN);
    }
}
