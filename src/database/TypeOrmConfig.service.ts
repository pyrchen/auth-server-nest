import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    console.log(this.config.get<string>('POSTGRES_DB'));
    
    return {
      type: 'postgres',
      port: this.config.get<number>('POSTGRESS_PORT'),
      host: this.config.get<string>('POSTGRES_HOST'),
      password: this.config.get<string>('POSTGRESS_PASSWORD'),
      username: this.config.get<string>('POSTGRES_USER'),
      database: this.config.get<string>('POSTGRES_DB'),
      entities: [],
      synchronize: true,
    }
  }
}