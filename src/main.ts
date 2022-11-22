import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MesssagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MesssagesModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
