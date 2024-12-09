import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [],
    synchronize: true,
  }),
    UsersModule,
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
