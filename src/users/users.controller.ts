import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from 'src/dto/userDTO';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    getAllUser() {
        console.log("GET ALL USER SUCCESS!");
        return this.userService.getAllUser();
    }

    @Get(":userId")
    getDetailUser(@Param('userId') userId: number) {
        console.log(`GET USER ID ${userId} SUCCESS!`);
        return this.userService.getDetailUser(Number(userId));
    }

    @Put(':userId')
    updateUser(@Param('userId') userId: number, @Body() userDTO: UserDTO) {
        console.log(`UPDATE USER ID ${userId} SUCCESS!`);
        return this.userService.updateUser(Number(userId), userDTO);
    }

    @Post()
    createUser(@Body() userDTO: UserDTO) {
        console.log("CREATE USER SUCCESS!");
        return this.userService.createUser(userDTO);
    }

    @Delete(':userId')
    deleteUser(@Param('userId') userId: number) {
        console.log("DELETE USER SUCCESS!");
        return this.userService.deleteUser(Number(userId));
    }
}
