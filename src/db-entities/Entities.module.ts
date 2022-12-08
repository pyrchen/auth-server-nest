import { UserEntity } from './User.entity';
import { Module } from "@nestjs/common";

@Module({
    imports: [UserEntity],
    exports: [UserEntity],
})
export class EntitiesModule {}