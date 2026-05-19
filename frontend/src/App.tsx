import { WaitlistForm } from './components/WaitlistForm';
import { WaitlistCounter } from './components/WaitlistCounter';

function App() {
  return (
    <main className="min-h-screen bg-[#080810] text-white">

     {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#080810]/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <svg className="w-7 h-7 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="font-bold text-base tracking-tight">AprendaTudo</span>
        </div>
        <span className="text-xs text-violet-300 border border-violet-500/30 bg-violet-500/10 px-3 py-1 rounded-full">
          Acesso antecipado
        </span>
      </nav>
      
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-2xl flex flex-col items-center">

          <p className="text-violet-400 text-xs font-medium uppercase tracking-widest mb-4">
            Plataforma de cursos online
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
            Desenvolva habilidades que o
            <span className="text-violet-400"> mercado valoriza</span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-lg mb-8 leading-relaxed">
            Trilhas estruturadas por especialistas, projetos práticos e
            certificações reconhecidas. Tudo em um só lugar.
          </p>

          <WaitlistForm />
          <WaitlistCounter />

        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/5 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">Por que o AprendaTudo?</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Uma plataforma projetada para quem leva o aprendizado a sério.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            <div className="bg-[#080810] p-6">
              <div className="w-8 h-8 bg-violet-600/20 border border-violet-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm text-white mb-2">Trilhas estruturadas</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Currículo pensado por especialistas para te levar do básico ao avançado.
              </p>
            </div>

            <div className="bg-[#080810] p-6">
              <div className="w-8 h-8 bg-violet-600/20 border border-violet-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm text-white mb-2">Projetos práticos</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Projetos reais que você pode adicionar direto ao seu portfólio.
              </p>
            </div>

            <div className="bg-[#080810] p-6">
              <div className="w-8 h-8 bg-violet-600/20 border border-violet-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm text-white mb-2">Certificação reconhecida</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Certificados reconhecidos por empresas parceiras no mercado brasileiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-white/5 py-16 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Garanta seu acesso antecipado</h2>
          <p className="text-gray-500 text-sm mb-8">
            Seja notificado no lançamento com condições exclusivas.
          </p>
          <WaitlistForm />
          <WaitlistCounter />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 text-center text-gray-600 text-xs">
        2026 AprendaTudo. Todos os direitos reservados.
      </footer>

    </main>
  );
}

export default App;