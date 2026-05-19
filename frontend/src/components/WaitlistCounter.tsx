import { useState, useEffect } from 'react';
import { getWaitlistCount } from '../services/api';

export function WaitlistCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Busca o contador ao carregar o componente
    fetchCount();

    // Atualiza o contador a cada 10 segundos
    const interval = setInterval(fetchCount, 10000);

    // Limpa o intervalo quando o componente desmonta
    return () => clearInterval(interval);
  }, []);

  async function fetchCount() {
    try {
      const total = await getWaitlistCount();
      setCount(total);
    } catch {
      // Silencia o erro — contador simplesmente não aparece
    }
  }

  if (count === null) return null;

  return (
    <p className="text-sm text-purple-300 mt-4">
      <span className="font-semibold text-white">{count}</span> pessoas já estão na lista
    </p>
  );
}