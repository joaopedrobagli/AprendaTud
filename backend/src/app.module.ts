import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaitlistModule } from './waitlist/waitlist.module';

@Module({
  imports: [
    // Carrega as variáveis do .env e disponibiliza globalmente
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Configura a conexão com o PostgreSQL usando as variáveis do .env
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        // Carrega automaticamente as entidades registradas nos módulos
        autoLoadEntities: true,
        // Sincroniza o banco com as entidades automaticamente (só usar em desenvolvimento)
        synchronize: true,
      }),
    }),

    WaitlistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}