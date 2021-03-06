import {Body, Controller, Get, HttpStatus, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {AuthService} from './auth.service';
import {UserDto} from '../user/dto/user.dto';
import {UserLoginExist} from '../user/exceptions/userLoginExist.exception';
import {UserService} from '../user/user.service';
import {UserAuthDto} from './dto/userAuth.dto';
import {AuthenticationError} from './exceptions/authenticationError.exception';
import {IToken} from '../token/interfaces/token.interface';
import {ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse} from '@nestjs/swagger';
import {VerifyTokenDto} from "./dto/verifyToken.dto";
import {TokenService} from "../token/token.service";
import {VerifyTokenError} from "./exceptions/VerifyTokenError.exception";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
        private readonly tokenService: TokenService,
    ) {}

    // Auth user
    @ApiOkResponse({ description: 'You have successfully logged in.' })
    @ApiForbiddenResponse({ description: 'The login or password is incorrect.'})
    @ApiBody({ type: [UserAuthDto]})
    @UsePipes(new ValidationPipe())
    @Post('login')
    async login(@Body() userAuthDto: UserAuthDto) {

        // Validation auth data
        const token: IToken = await this.authService.login(userAuthDto);
        if (token) {
            return {
                statusCode: HttpStatus.OK,
                user: {
                    id: token.userId,
                    token: token.token,
                    exp: token.exp,
                },
            };
        }
        throw new AuthenticationError();
    }

    // Create new user
    @ApiCreatedResponse({ description: 'User successfully registered.' })
    @ApiForbiddenResponse({ description: 'Login already exists.'})
    @ApiBadRequestResponse({ description: 'Validation failed.'})
    @ApiBody({ type: [UserDto]})
    @UsePipes(new ValidationPipe())
    @Post('register')
    async register(@Body() user: UserDto) {

        // Check login exists
        const checkLoginExists: boolean = await this.userService.existLogin(user.login);
        if (checkLoginExists) {
            throw new UserLoginExist();
        }

        // Create new user
        const token: IToken = await this.authService.register(user);
        return {
            statusCode: HttpStatus.OK,
            message: 'You have successfully registered',
            user: token,
        };
    }

    // Verify token
    @ApiBody({ type: [VerifyTokenDto]})
    @UsePipes(new ValidationPipe())
    @Post('verifyToken')
    async verifyToken(@Body() verifyTokenDto: VerifyTokenDto) {

        // Validation auth data
        const verify: boolean = await this.authService.verifyToken(verifyTokenDto.token);
        if (verify) {
            const token: IToken = await this.tokenService.get(verifyTokenDto.token);
            return {
                user: {
                    userId: token.userId,
                    token: token.token,
                    exp: token.exp,
                },
            };
        }
        throw new VerifyTokenError();
    }
}
