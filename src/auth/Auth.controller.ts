import { SignInBody } from './../dto/SignInBody.dto';
import { SignUpBody } from './../dto/SignUpBody.dto';
import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { Routes } from "src/routing/routes.contants";

@Controller({
    path: Routes.AUTH.ROOT,
})
export class AuthController {
    @Inject
    @Post(Routes.AUTH.SIGN_IN)
    async signIn(@Body() reqBody: SignInBody) {
        return reqBody;
    }

    @Post(Routes.AUTH.SIGN_UP)
    async signUp(@Body() reqBody: SignUpBody) {
        return ;
    }
}