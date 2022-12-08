import { UsersModule } from './../users/Users.module';
import { AuthController } from './Auth.controller';
import { AuthService } from './Auth.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [UsersModule],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule { }
