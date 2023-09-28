import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log('process.env.PORT', process.env.PORT);
  await app.listen(process.env.PORT || 4500);
}
void bootstrap();
