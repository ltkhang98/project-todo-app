import { Module } from '@nestjs/common';
import { UserGroupsController } from './user_groups.controller';
import { UserGroupsService } from './user_groups.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UserGroupsController],
  providers: [UserGroupsService, PrismaService]
})
export class UserGroupsModule { }
