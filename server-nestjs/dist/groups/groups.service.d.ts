import { GroupDTO } from 'src/dto/groupDTO';
import { PrismaService } from 'src/prisma.service';
export declare class GroupsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllGroup(): Promise<any>;
    getDetailGroup(groupId: number): Promise<any>;
    createGroup(groupDTO: GroupDTO): Promise<GroupDTO>;
    updateGroup(groupId: number, groupDTO: GroupDTO): import(".prisma/client").Prisma.Prisma__tbl_groupClient<{
        groupId: number;
        group_name: string;
        create_date: Date;
        update_date: Date;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    deleteGroup(groupId: number): Promise<GroupDTO>;
}
