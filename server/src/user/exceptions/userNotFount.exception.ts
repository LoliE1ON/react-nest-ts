import {HttpException, HttpStatus} from '@nestjs/common';

export class UserNotFount extends HttpException {
    constructor() {
        super({error: 'This user already exists'}, HttpStatus.FORBIDDEN);
    }
}
