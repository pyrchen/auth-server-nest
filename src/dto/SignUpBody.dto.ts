import { UserValidationConst } from './dto-validation/User.v';
import { IsDefined, IsEmail, IsString, Length } from 'class-validator';
import { UserEntity } from './../db-entities/User.entity';

export class SignUpBody extends UserEntity {
    @IsDefined()
    @IsString()
    @Length(
        UserValidationConst.username.length.min,
        UserValidationConst.username.length.max,
        { message: UserValidationConst.username.length.message() },
    )
    username: string;

    @IsDefined()
    @IsEmail()
    email: string;

    @IsDefined()
    @IsString()
    @Length(
        UserValidationConst.password.length.min,
        UserValidationConst.password.length.max,
        { message: UserValidationConst.password.length.message() },
    )
    password: string;
}