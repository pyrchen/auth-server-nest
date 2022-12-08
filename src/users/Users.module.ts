import { UserEntity } from './../db-entities/User.entity';
import { EntitiesModule } from './../db-entities/Entities.module';
import { UsersService } from './Users.service';
import { Module } from "@nestjs/common";
import { insertRepository } from 'src/database/TypeOrm.repository';

const insert = insertRepository(UserEntity);
@Module({
    imports: [insert()],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}