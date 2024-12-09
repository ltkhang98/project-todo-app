import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/dto/userDTO';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

    getAllUser(): Promise<any> {
        return this.prisma.tbl_user.findMany();
    }

    getDetailUser(userId: number): Promise<any> {
        return this.prisma.tbl_user.findFirst({ where: { userId } })
    }

    createUser(userDTO: UserDTO): Promise<UserDTO> {
        return this.prisma.tbl_user.create({
            data: userDTO
        })
    }

    updateUser(userId: number, userDTO: UserDTO) {
        return this.prisma.tbl_user.update({
            where: { userId },
            data: userDTO,
        });
    }

    deleteUser(userId: number): Promise<UserDTO> {
        return this.prisma.tbl_user.delete(
            { where: { userId } }
        );
    }
}
