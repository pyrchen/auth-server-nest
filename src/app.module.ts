import { EntitiesModule } from './db-entities/Entities.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/Auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/Database.module';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
        JwtModule.register({
            secret: 'pWf7y5dATO',
            signOptions: {
                expiresIn: '1m',
            },
        }),
        PassportModule,
        DatabaseModule,
        EntitiesModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
