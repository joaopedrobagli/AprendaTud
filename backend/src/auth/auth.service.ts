import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  // Valida as credenciais e retorna o token JWT
  async login(email: string, password: string) {
    const adminEmail = this.configService.get('ADMIN_EMAIL');
    const adminPassword = this.configService.get('ADMIN_PASSWORD');

    // Verifica se o e-mail e senha batem com as variáveis de ambiente
    if (email !== adminEmail || password !== adminPassword) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Gera o token JWT com o e-mail como payload
    const payload = { email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}