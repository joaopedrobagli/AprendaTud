import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WaitlistEntity } from './waitlist.entity';
import { CreateWaitlistDto } from './waitlist.dto';

@Injectable()
export class WaitlistService {

  constructor(
    // Injeta o repositório do TypeORM para interagir com a tabela
    @InjectRepository(WaitlistEntity)
    private readonly waitlistRepository: Repository<WaitlistEntity>,
  ) {}

  // Cadastra um novo lead na waitlist
  async create(dto: CreateWaitlistDto): Promise<WaitlistEntity> {

    // Verifica se o e-mail já está cadastrado
    const existing = await this.waitlistRepository.findOne({
      where: { email: dto.email },
    });

    if (existing) {
      throw new ConflictException('E-mail já cadastrado na lista de espera');
    }

    const lead = this.waitlistRepository.create(dto);
    return this.waitlistRepository.save(lead);
  }

  // Retorna o total de leads cadastrados
  async count(): Promise<{ count: number }> {
    const count = await this.waitlistRepository.count();
    return { count };
  }
}