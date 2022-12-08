import { UserEntity } from './../db-entities/User.entity';

export abstract class AuthAbstractService {
    async validateUserByUsername(username: string, password: string): Promise<any> {}
    async validateUserByEmail(email: string, password: string): Promise<any> {}
    async signUp(userData: Omit<UserEntity, 'id'>): Promise<UserEntity> {
        return {} as UserEntity;
    }
    async signIn(userData: Omit<UserEntity, 'id'>): Promise<UserEntity> {
        return {} as UserEntity;
    }
}