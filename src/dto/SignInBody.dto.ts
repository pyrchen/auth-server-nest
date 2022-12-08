import { UserEntity } from './../db-entities/User.entity';
import { IsDefined, IsString } from 'class-validator';

export class SignInBody extends UserEntity {
  @IsDefined()
  @IsString()
  username: string;

  @IsDefined()
  @IsString()
  password: string;
}