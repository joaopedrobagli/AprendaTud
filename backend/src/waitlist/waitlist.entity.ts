import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('waitlist')
export class WaitlistEntity {

  // ID gerado automaticamente
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Nome do lead
  @Column()
  name: string;

  // E-mail do lead — único para evitar duplicatas
  @Column({ unique: true })
  email: string;

  // De onde veio o lead (ex: "landing-page")
  @Column({ default: 'landing-page' })
  source: string;

  // Data de cadastro gerada automaticamente
  @CreateDateColumn()
  createdAt: Date;
}