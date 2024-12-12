import { UsersService } from './users.service';
import { UserDTO } from 'src/dto/userDTO';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getAllUser(): Promise<any>;
    getDetailUser(userId: number): Promise<any>;
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
    createUser(userDTO: UserDTO): Promise<UserDTO>;
    deleteUser(userId: number): Promise<UserDTO>;
}
