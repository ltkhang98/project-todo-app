import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    userId: number;
  
    @Column() 
    username: string;
  
    @Column()
    password: string;

    @Column()
    user_email: string;

    @Column()
    user_phone: number;

    @Column()
    user_address: string;

    @Column()
    user_birtday: Date;

    @Column()
    create_date: Date;

    @Column()
    update_date: Date;
}