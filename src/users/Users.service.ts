import { UserEntity } from './../db-entities/User.entity';
import { Injectable, NotFoundException, BadGatewayException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    users: UserEntity[] = [
        { id: 1, username: 'YourNobodu', email: 'yournobodu@gmail.com', password: '123456' },
        { id: 2, username: 'Няшка', email: 'p@mail.ru', password: '654321' },
    ];
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>
    ) {}

    public createUserAndSave(userData: Omit<UserEntity, 'id'>) {
        const lastId = this.users.at(-1).id;
        this.users.push({ ...userData, id: lastId });
        return this.users.at(-1);
    }

    public findOne(userData: Partial<UserEntity>): UserEntity {
        let fieldToFind;
        if ('username' in userData) fieldToFind = 'username';
        else if ('email' in userData) fieldToFind = 'email';
        else if ('id' in userData) fieldToFind = 'id';
        else throw new BadGatewayException();

        return this.findByUserField(fieldToFind, userData[fieldToFind]);
    }

    private findByUserField(field: string, value: any) {
        const user = this.users.find((u) => u[field] === value);
        if (!user) throw new NotFoundException();
        return user;
    }
}