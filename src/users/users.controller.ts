import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from 'src/entitis/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {

    }

    @Get()
    getAllUsers(): Promise<UserEntity[]> {
        return this.userService.getAllUsers();
    }

    @Get(':userId')
    getUserbyId(@Param() params) {
        return this.userService.getUserbyId(params.userId);
    }

    @Put(':userId')
    updateUser(@Body() user: UserEntity, @Param() params) {
        return this.userService.updateUser(params.userId, user);
    }

    @Post()
    createUser(@Body() user: UserEntity) {
        return this.userService.createUser(user);
    }

    @Delete(':userId')
    deleteUser(@Param() params) {
        return this.userService.deleteUser(params.userId);
    }
}
