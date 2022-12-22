import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { CreateUserDto } from 'src/user/dto';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto';
import { AuthUserResponse } from './response';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @ApiTags('API')
    @ApiResponse({status: 201, type: CreateUserDto})
    @Post('register')
    register(@Body() dto: CreateUserDto): Promise<CreateUserDto> {
        return this.authService.registerUsers(dto)
    }

    @ApiTags('API')
    @ApiResponse({status: 200, type: AuthUserResponse})
    @Post('login')
    login(@Body() dto: UserLoginDto): Promise<any> {
        return this.authService.loginUser(dto)
    }

    
}
