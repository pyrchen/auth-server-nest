import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { logger: console });
    const port = process.env.APP_PORT || 7000;

    app.useGlobalPipes(new ValidationPipe());

    await app.listen(port, () => {
        console.log(`App successfully started on port ${port}`);
    });
}
bootstrap();
