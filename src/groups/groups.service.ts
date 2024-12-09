import { Injectable } from '@nestjs/common';
import { GroupDTO } from 'src/dto/groupDTO';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GroupsService {

    constructor(private prisma: PrismaService) { }

    getAllGroup(): Promise<any> {
        return this.prisma.tbl_group.findMany();
    }


    getDetailGroup(groupId: number): Promise<any> {
        return this.prisma.tbl_group.findFirst({ where: { groupId } })
    }

    createGroup(groupDTO: GroupDTO): Promise<GroupDTO> {
        return this.prisma.tbl_group.create({
            data: groupDTO
        })
    }


    updateGroup(groupId: number, groupDTO: GroupDTO) {
        return this.prisma.tbl_group.update({
            where: { groupId },
            data: groupDTO,
        });
    }


    deleteGroup(groupId: number): Promise<GroupDTO> {
        return this.prisma.tbl_group.delete(
            { where: { groupId } }
        );
    }
}
