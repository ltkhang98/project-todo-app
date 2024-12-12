import { GroupDTO } from 'src/dto/groupDTO';
import { GroupsService } from './groups.service';
export declare class GroupsController {
    private readonly groupService;
    constructor(groupService: GroupsService);
    getAllGroup(): Promise<any>;
    getDetailGroup(groupId: number): Promise<any>;
    updateGroup(groupId: number, groupDTO: GroupDTO): import(".prisma/client").Prisma.Prisma__tbl_groupClient<{
        groupId: number;
        group_name: string;
        create_date: Date;
        update_date: Date;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createGroup(groupDTO: GroupDTO): Promise<GroupDTO>;
    deleteGroup(groupId: number): Promise<GroupDTO>;
}
