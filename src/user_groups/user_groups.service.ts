import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserGroupsService {
    constructor(private prisma: PrismaService) { }

    getAllUser_group(): Promise<any> {
        return this.prisma.tbl_user_group.findMany({
            select: {
                user: true,
                group: true
            }
        });
    }
}
