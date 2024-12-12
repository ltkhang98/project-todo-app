import { UserGroupsService } from './user_groups.service';
export declare class UserGroupsController {
    private readonly userGroupService;
    constructor(userGroupService: UserGroupsService);
    getAllUserGroup(): Promise<any>;
}
