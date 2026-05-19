import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Lead {
  id: string;
  name: string;
  email: string;
  source: string;
  createdAt: string;
}

function Admin() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se tem token salvo — se não tiver, redireciona pro login
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchLeads(token);
  }, []);

  async function fetchLeads(token: string) {
    try {
      const response = await axios.get('http://localhost:3000/waitlist', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLeads(response.data);
      setCount(response.data.length);
    } catch {
      // Token inválido ou expirado — redireciona pro login
      localStorage.removeItem('admin_token');
      navigate('/admin/login');
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  }

  function exportCSV() {
    // Gera o CSV manualmente e força o download
    const header = 'Nome,E-mail,Origem,Data\n';
    const rows = leads.map(l =>
      `${l.name},${l.email},${l.source},${new Date(l.createdAt).toLocaleDateString('pt-BR')}`
    ).join('\n');

    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leads.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#080810] text-white flex items-center justify-center">
        <p className="text-gray-500 text-sm">Carregando...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080810] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="font-bold text-sm">AprendaTudo</span>
          <span className="text-gray-600 text-xs ml-2">/ admin</span>
        </div>
        <button
          onClick={handleLogout}
          className="text-xs text-gray-500 hover:text-white transition"
        >
          Sair
        </button>
      </nav>

      <div className="max-w-5xl mx-auto px-8 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold">Lista de espera</h1>
            <p className="text-gray-500 text-sm mt-1">{count} pessoas cadastradas</p>
          </div>
          <button
            onClick={exportCSV}
            className="text-xs bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition"
          >
            Exportar CSV
          </button>
        </div>

        {/* Tabela */}
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 text-gray-500 text-xs">
                <th className="text-left px-6 py-4 font-medium">Nome</th>
                <th className="text-left px-6 py-4 font-medium">E-mail</th>
                <th className="text-left px-6 py-4 font-medium">Origem</th>
                <th className="text-left px-6 py-4 font-medium">Data</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr
                  key={lead.id}
                  className={`border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition ${index % 2 === 0 ? '' : 'bg-white/[0.01]'}`}
                >
                  <td className="px-6 py-4 text-white">{lead.name}</td>
                  <td className="px-6 py-4 text-gray-400">{lead.email}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs bg-violet-500/10 text-violet-300 border border-violet-500/20 px-2 py-1 rounded-full">
                      {lead.source}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(lead.createdAt).toLocaleDateString('pt-BR')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}

export default Admin;