import { Injectable } from "@nestjs/common";
import { AuthAbstractService } from "./AuthService.abstract";

@Injectable()
export class AuthService extends AuthAbstractService {}