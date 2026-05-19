import axios from 'axios';

// URL base da API — aponta pro backend NestJS
const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// Cadastra um novo lead na waitlist
export async function joinWaitlist(data: { name: string; email: string }) {
  const response = await api.post('/waitlist', data);
  return response.data;
}

// Retorna o total de leads cadastrados
export async function getWaitlistCount(): Promise<number> {
  const response = await api.get('/waitlist/count');
  return response.data.count;
}