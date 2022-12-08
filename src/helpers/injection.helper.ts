import { Provider } from "@nestjs/common";

export class Token {
    static instance: Token & { exists: boolean, tokens: Record<string, string>, token?: string };
    constructor(private token: string) {
        const upper = token.toUpperCase();
        if (Token.instance && Token.instance.tokens[upper]) {
            throw new Error(`${token} token is already in use`);
        } else {
            Token.instance = Object.assign(this, {
                exists: true,
                tokens: { [upper]: upper },
            });
            return Object.assign(this, {
                token: upper,
            });
        }
    }
    
    static public getToken(token: string) {
        if (!Token.instance) return;
        return Token.instance.tokens[token.toUpperCase()] || null;
    }
}

export const injectProvider = (token: string | Token, providerClass): Provider<any> => {
    if (token instanceof Token)
    const registeredToken = token instanceof Token ? Token.getToken() : new Token(token).token;
    return {
        provider: registeredToken,
        useClass: providerClass,
    }
};