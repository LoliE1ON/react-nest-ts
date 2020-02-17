import {Body, Controller, Get, Param, UsePipes, ValidationPipe} from '@nestjs/common';
import {UserService} from './user.service';
import {ApiBody} from "@nestjs/swagger";
import {GetUserDto} from "./dto/getUser.dto";
import {IUser} from "./interfaces/user.interface";
import {UserNotFount} from "./exceptions/userNotFount.exception";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    // Get user by login
    @ApiBody({ type: [GetUserDto]})
    @UsePipes(new ValidationPipe())
    @Get('get/:login')
    async get(@Param() getUserDto: GetUserDto) {

        // Select user
        const user:IUser = await this.userService.findOne(getUserDto.login);
        if(user) {
            return {
                user: {
                    userId: user._id,
                    login: user.login,
                }
            }
        }
        throw new UserNotFount();

    }

}
