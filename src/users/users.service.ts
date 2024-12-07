import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entitis/user.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo: Repository<UserEntity>,
    ) { }

    async getAllUsers(): Promise<UserEntity[]> {
        return await this.userRepo.find();
    }

    async getUserbyId(userId: number): Promise<UserEntity> {
        return await this.userRepo.findOneBy({ userId })
    }

    async updateUser(userId: number, user: UserEntity): Promise<UpdateResult> {
        return await this.userRepo.update(userId, user)
    }

    async createUser(user: UserEntity): Promise<UserEntity> {
        return await this.userRepo.save(user)
    }

    async deleteUser(userId: number): Promise<void> {
        await this.userRepo.delete(userId);
    }
}
