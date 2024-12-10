import { Controller, Get } from '@nestjs/common';
import { UserGroupsService } from './user_groups.service';

@Controller('user-groups')
export class UserGroupsController {
    constructor(private readonly userGroupService: UserGroupsService) { }

    @Get()
    getAllUserGroup() {
        return this.userGroupService.getAllUser_group();
    }
}
