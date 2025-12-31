import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Flex013 = () => {
  // Estados para controlar o Flexbox
  const [justify, setJustify] = useState('justify-start');
  const [align, setAlign] = useState('items-center');
  const [gap, setGap] = useState('gap-4');

  // Opções para os botões
  const justifyOptions = ['justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around'];
  const alignOptions = ['items-start', 'items-center', 'items-end', 'items-stretch'];

  return (
    <div className="flex flex-col gap-6 text-slate-200 animate-fade-in-up">
      
      {/* 1. CABEÇALHO / BREADCRUMB */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-500 mb-1">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-purple-400">Exercicio 13</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Flexbox Playground
          </h1>
          <p className="text-slate-400 mt-1">Explore as propriedades interativamente.</p>
        </div>
        
        {/* Indicador visual de "Código Limpo" */}
        <div className="hidden md:block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
          display: flex;
        </div>
      </div>

      {/* 2. ÁREA DE VISUALIZAÇÃO (O "Vidro" Principal) */}
      <div className="relative group">
        {/* Efeito de brilho atrás do card */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
        
        <div className="relative rounded-2xl bg-[#1e1e20] border border-white/10 p-6 shadow-2xl overflow-hidden">
            
            {/* O CONTAINER FLEX (Onde a mágica acontece) */}
            <div className={`
              h-80 w-full rounded-xl bg-black/30 border border-white/5 
              flex ${justify} ${align} ${gap} p-4 transition-all duration-500 ease-in-out
            `}>
              
              {/* ITEM 1 */}
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center text-2xl font-bold text-black shadow-lg shadow-cyan-500/20 transform transition hover:scale-110">
                1
              </div>

              {/* ITEM 2 */}
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-400 to-green-300 flex items-center justify-center text-2xl font-bold text-black shadow-lg shadow-emerald-500/20 transform transition hover:scale-110">
                2
              </div>

              {/* ITEM 3 */}
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl font-bold text-black shadow-lg shadow-orange-500/20 transform transition hover:scale-110">
                3
              </div>

              {/* ITEM 4 */}
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-pink-500/20 transform transition hover:scale-110">
                4
              </div>

            </div>

            {/* BARRA DE CÓDIGO (Snippet Visual) */}
            <div className="mt-4 p-3 bg-black/50 rounded-lg border border-white/5 font-mono text-sm flex gap-4 text-slate-400 overflow-x-auto">
               <span className="text-purple-400">.container</span> {'{'} 
               <span className="text-cyan-300">display</span>: flex;
               <span className="text-cyan-300">justify-content</span>: <span className="text-yellow-300">{justify.replace('justify-', '')}</span>;
               <span className="text-cyan-300">align-items</span>: <span className="text-yellow-300">{align.replace('items-', '')}</span>;
               {'}'}
            </div>
        </div>
      </div>

      {/* 3. CONTROLES (Painel de baixo) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Controle Justify */}
        <div className="bg-[#2a2a30] p-5 rounded-xl border border-white/5">
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span> Justify Content (Eixo X)
          </h3>
          <div className="flex flex-wrap gap-2">
            {justifyOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setJustify(opt)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-300
                  ${justify === opt 
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]' 
                    : 'bg-white/5 border-transparent text-slate-400 hover:bg-white/10 hover:text-white'}
                `}
              >
                {opt.replace('justify-', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Controle Align */}
        <div className="bg-[#2a2a30] p-5 rounded-xl border border-white/5">
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span> Align Items (Eixo Y)
          </h3>
          <div className="flex flex-wrap gap-2">
            {alignOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setAlign(opt)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-300
                  ${align === opt 
                    ? 'bg-purple-500/20 border-purple-500 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]' 
                    : 'bg-white/5 border-transparent text-slate-400 hover:bg-white/10 hover:text-white'}
                `}
              >
                {opt.replace('items-', '')}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Flex013;