import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Libera o CORS para o frontend conseguir chamar a API
  app.enableCors();

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('AprendaTudo API')
    .setDescription('API da lista de espera da plataforma AprendaTudo')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Swagger disponível em /api
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();