import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { FilterExceptions } from './lib/FilterExceptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cấu hình Swagger
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('user-management')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documents', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Loại bỏ các thuộc tính không được khai báo trong DTO
      forbidNonWhitelisted: true, // Trả về lỗi nếu có thuộc tính không được khai báo
      transform: true, // Tự động chuyển đổi dữ liệu về kiểu dữ liệu trong DTO
    }),
  );
  app.useGlobalFilters(new FilterExceptions());

  console.log('Listening on port 4000');
  await app.listen(4000);
}
bootstrap();
