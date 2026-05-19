import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joinWaitlist } from '../services/api';

interface FormData {
  name: string;
  email: string;
}

export function WaitlistForm() {
  // Controla o estado do envio do formulário
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setStatus('loading');
    try {
      await joinWaitlist(data);
      setStatus('success');
      reset();
    } catch (error: any) {
      // Verifica se é erro de e-mail duplicado
      const message = error.response?.data?.message || 'Erro ao cadastrar. Tente novamente.';
      setErrorMessage(message);
      setStatus('error');
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {status === 'success' ? (
        // Mensagem de sucesso após cadastro
        <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-6 text-center">
          <p className="text-violet-300 font-semibold text-lg">Você está na lista!</p>
          <p className="text-violet-400 mt-1 text-sm">Avisaremos quando abrirmos as vagas.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">

          {/* Campo nome */}
          <input
            {...register('name', { required: 'Nome é obrigatório' })}
            placeholder="Seu nome"
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder:text-gray-600"
          />
          {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}

          {/* Campo e-mail */}
          <input
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: { value: /^\S+@\S+$/i, message: 'E-mail inválido' }
            })}
            placeholder="Seu melhor e-mail"
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder:text-gray-600"
          />
          {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}

          {/* Mensagem de erro da API */}
          {status === 'error' && (
            <span className="text-red-400 text-sm">{errorMessage}</span>
          )}

          {/* Botão de envio */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition disabled:opacity-50"
          >
            {status === 'loading' ? 'Enviando...' : 'Quero entrar na lista'}
          </button>
        </form>
      )}
    </div>
  );
}