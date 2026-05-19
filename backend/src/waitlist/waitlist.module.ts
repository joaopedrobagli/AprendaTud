import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaitlistController } from './waitlist.controller';
import { WaitlistService } from './waitlist.service';
import { WaitlistEntity } from './waitlist.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    // Registra a entidade no módulo para o TypeORM criar a tabela
    TypeOrmModule.forFeature([WaitlistEntity]),
    // Importa o AuthModule para usar o JwtGuard
    AuthModule,
  ],
  controllers: [WaitlistController],
  providers: [WaitlistService],
})
export class WaitlistModule {}