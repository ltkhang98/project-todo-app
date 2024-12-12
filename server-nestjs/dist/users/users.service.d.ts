import { UserDTO } from 'src/dto/userDTO';
import { PrismaService } from 'src/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUser(): Promise<any>;
    getDetailUser(userId: number): Promise<any>;
    createUser(userDTO: UserDTO): Promise<UserDTO>;
    updateUser(userId: number, userDTO: UserDTO): import(".prisma/client").Prisma.Prisma__tbl_userClient<{
        userId: number;
        username: string;
        password: string;
        user_email: string;
        user_phone: number;
        user_address: string;
        user_birthday: Date;
        create_date: Date;
        update_date: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    deleteUser(userId: number): Promise<UserDTO>;
}
