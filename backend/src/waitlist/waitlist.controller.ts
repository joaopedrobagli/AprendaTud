import { Controller, Post, Get, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { CreateWaitlistDto } from './waitlist.dto';

@Controller('waitlist')
export class WaitlistController {

  constructor(private readonly waitlistService: WaitlistService) {}

  // POST /waitlist — cadastra um novo lead
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() dto: CreateWaitlistDto) {
    return this.waitlistService.create(dto);
  }

  // GET /waitlist/count — retorna o total de leads
  @Get('count')
  async count() {
    return this.waitlistService.count();
  }
}