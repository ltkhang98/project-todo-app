import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GroupDTO } from 'src/dto/groupDTO';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
    constructor(private readonly groupService: GroupsService) { }

    @Get()
    getAllGroup() {
        return this.groupService.getAllGroup();
    }

    @Get(":groupId")
    getDetailGroup(@Param('groupId') groupId: number) {
        return this.groupService.getDetailGroup(Number(groupId));
    }

    @Put(':groupId')
    updateGroup(@Param('groupId') groupId: number, @Body() groupDTO: GroupDTO) {
        return this.groupService.updateGroup(Number(groupId), groupDTO);
    }

    @Post()
    createGroup(@Body() groupDTO: GroupDTO) {
        return this.groupService.createGroup(groupDTO);
    }

    @Delete(':groupId')
    deleteGroup(@Param('groupId') groupId: number) {
        return this.groupService.deleteGroup(Number(groupId));
    }
}
