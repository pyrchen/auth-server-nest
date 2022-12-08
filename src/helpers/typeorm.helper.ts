import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

export function insertRepository(...reps: Array<EntityClassOrSchema>) {
    return function () {
        return TypeOrmModule.forFeature(reps);
    };
}