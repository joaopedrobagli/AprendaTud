import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateWaitlistDto {

  // Nome é obrigatório e deve ser string
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString()
  name: string;

  // E-mail é obrigatório e deve ser válido
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  // Source é opcional — se não vier, usa o padrão da entidade
  @IsOptional()
  @IsString()
  source?: string;
}