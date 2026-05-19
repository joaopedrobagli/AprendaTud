import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Envia as credenciais pro backend e recebe o token JWT
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });

      // Salva o token no localStorage para usar nas próximas requisições
      localStorage.setItem('admin_token', response.data.access_token);
      navigate('/admin');
    } catch {
      setError('E-mail ou senha incorretos.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#080810] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <svg className="w-7 h-7 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="font-bold text-base">AprendaTudo</span>
        </div>

        {/* Card de login */}
        <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-8">
          <h1 className="text-lg font-bold mb-1">Acesso admin</h1>
          <p className="text-gray-500 text-sm mb-6">Entre com suas credenciais.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder:text-gray-600 text-sm"
            />

            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder:text-gray-600 text-sm"
            />

            {error && <span className="text-red-400 text-sm">{error}</span>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition disabled:opacity-50 text-sm mt-1"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>

          </form>
        </div>

      </div>
    </main>
  );
}

export default Login;