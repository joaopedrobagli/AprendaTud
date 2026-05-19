import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaitlistController } from './waitlist.controller';
import { WaitlistService } from './waitlist.service';
import { WaitlistEntity } from './waitlist.entity';

@Module({
  // Registra a entidade no módulo para o TypeORM criar a tabela
  imports: [TypeOrmModule.forFeature([WaitlistEntity])],
  controllers: [WaitlistController],
  providers: [WaitlistService],
})
export class WaitlistModule {}