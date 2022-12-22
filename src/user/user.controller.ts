import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Patch, Req, UseGuards } from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiTags("API")
    @ApiResponse({status: 200, type: UpdateUserDto})
    @UseGuards(JwtAuthGuard)
    @Patch()
    updateUser(@Body() updateDto: UpdateUserDto, @Req() request): Promise<UpdateUserDto> {
        const user = request.user
        return this.userService.updateUser(user.email, updateDto)
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    deleteUser (@Req() request) {
        const user = request.user
        return this.userService.deleteUser(user.email)
    }
}
