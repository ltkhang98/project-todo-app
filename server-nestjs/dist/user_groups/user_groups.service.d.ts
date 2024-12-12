import { PrismaService } from 'src/prisma.service';
export declare class UserGroupsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUser_group(): Promise<any>;
}
