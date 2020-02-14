import {Controller} from '@nestjs/common';
import {UserService} from '../user/user.service';
@Controller('users')
export class UsersController {
    constructor(private userService: UserService) {}
}
