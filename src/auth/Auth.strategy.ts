import { Strategy } from 'passport-local';
import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthAbstractService } from './AuthService.abstract';

export class LocalAuthStrategy extends PassportStrategy(Strategy) {
    constructor(private _authService: AuthAbstractService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this._authService.validateUserByUsername(username, password);
        if (!user) throw new UnauthorizedException();
        return user;
    }
}