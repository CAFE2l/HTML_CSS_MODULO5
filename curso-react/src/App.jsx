import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// IMPORTES
import Flex001 from './Exercicios/ex027/flex001/index';
import Flex002 from './Exercicios/ex027/flex002/index';
import Flex003 from './Exercicios/ex027/flex003/index';
import Flex004 from './Exercicios/ex027/flex004/index';
import Flex005 from './Exercicios/ex027/flex005/index';
import Flex006 from './Exercicios/ex027/flex006/index';
import Flex007 from './Exercicios/ex027/flex007/index';
import Flex008 from './Exercicios/ex027/flex008/index';
import Flex009 from './Exercicios/ex027/flex009/index';
import Flex010 from './Exercicios/ex027/flex010/index';
import Flex011 from './Exercicios/ex027/flex011/index';
import Flex012 from './Exercicios/ex027/flex012/index';
import Flex013 from './Exercicios/ex027/flex013/index';
import Flex014 from './Exercicios/ex027/flex014/index';

function App() {
  const navItems = [
    { path: '/ex01', label: '01', gradient: 'from-violet-500 to-purple-600' },
    { path: '/ex02', label: '02', gradient: 'from-cyan-400 to-blue-500' },
    { path: '/ex03', label: '03', gradient: 'from-emerald-400 to-teal-500' },
    { path: '/ex04', label: '04', gradient: 'from-orange-400 to-red-500' },
    { path: '/ex05', label: '05', gradient: 'from-pink-500 to-rose-600' },
    { path: '/ex06', label: '06', gradient: 'from-purple-400 to-indigo-500' },
    { path: '/ex07', label: '07', gradient: 'from-red-400 to-orange-500' },
    { path: '/ex08', label: '08', gradient: 'from-blue-500 to-cyan-500' },
    { path: '/ex09', label: '09', gradient: 'from-amber-400 to-orange-500' },
    { path: '/ex010', label: '10', gradient: 'from-green-400 to-emerald-500' },
    { path: '/ex011', label: '11', gradient: 'from-yellow-400 to-amber-500' },
    { path: '/ex012', label: '12', gradient: 'from-indigo-500 to-blue-600' },
    {path: '/ex013', label: '13', gradient: 'from-indigo-500 to-blue-600' },
    {path: '/ex014', label: '14', gradient: 'from-indigo-500 to-blue-600' },
  ];

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950">
        
        {/* HEADER FIXO - ESTILO VITE */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-gray-900/80 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between py-4">
              
              {/* LOGO/TÍTULO COM GRADIENTE */}
              <div className="mb-4 sm:mb-0">
                <Link to="/" className="group">
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Flexbox
                    </span>
                    <span className="text-gray-300 ml-2">MasterClass</span>
                    <span className="inline-block ml-3 text-sm px-3 py-1 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-full border border-violet-500/30 text-violet-300">
                      Vite Style
                    </span>
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">Laboratório de exercícios de Flexbox CSS</p>
                </Link>
              </div>

              {/* MENU INICIAL */}
              <div className="flex items-center space-x-2">
                <Link 
                  to="/" 
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-violet-500/50 hover:bg-gradient-to-r hover:from-violet-900/20 hover:to-cyan-900/20 transition-all duration-300 group"
                >
                  <span className="text-gray-300 group-hover:text-white">🏠</span>
                  <span className="ml-2 text-sm text-gray-300 group-hover:text-white">Início</span>
                </Link>
              </div>
            </div>

            {/* NAVEGAÇÃO HORIZONTAL - PILLS */}
            <nav className="py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Exercícios <span className="text-violet-400">{navItems.length}</span>
                </h3>
                
                {/* BARRA DE ROLAGEM HORIZONTAL PARA MOBILE */}
                <div className="relative flex-1 mx-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900 to-transparent pointer-events-none" />
                  
                  <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide">
                    {navItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className={`group relative flex-shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-br ${item.gradient} hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-${item.gradient.split(' ')[1].replace('to-', '')}/30 border border-transparent hover:border-white/20`}
                      >
                        <span className="text-white font-semibold text-sm tracking-wider">
                          {item.label}
                        </span>
                        
                        {/* EFEITO DE BRILHO NO HOVER */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* INDICADOR DE STATUS */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="hidden md:flex items-center space-x-2">
                  <span className="text-xs text-gray-500 px-3 py-1 bg-gray-800/50 rounded-full">
                    React + Vite
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {/* ÁREA DE CONTEÚDO PRINCIPAL */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative">
            {/* GRADIENTE DE BACKGROUND */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-72 bg-gradient-to-r from-violet-600/10 via-transparent to-cyan-600/10 blur-3xl" />
            
            {/* CARD DE CONTEÚDO */}
            <div className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
              
              {/* CABEÇALHO DO CARD */}
              <div className="border-b border-gray-700/50 bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                        Demonstração Interativa
                      </span>
                    </h2>
                    <p className="text-sm text-gray-400 mt-1">
                      Visualize e interaja com os exercícios de Flexbox
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTEÚDO DAS ROTAS */}
              <div className="p-6 md:p-8">
                <div className="min-h-[500px]">
                  <Routes>
                    <Route path="/" element={
                      <div className="text-center py-16">
                        <div className="inline-block p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50">
                          <div className="text-6xl mb-6">
                            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                              🎯
                            </span>
                          </div>
                          <h1 className="text-3xl font-bold text-white mb-4">
                            Bem-vindo ao <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Flexbox MasterClass</span>
                          </h1>
                          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                            Selecione um exercício acima para visualizar demonstrações interativas de Flexbox CSS.
                            Cada exemplo demonstra diferentes propriedades e técnicas para dominar layout com Flexbox.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                              <div className="text-violet-400 text-lg font-semibold mb-2">📐 Layout</div>
                              <p className="text-sm text-gray-400">justify-content, align-items</p>
                            </div>
                            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                              <div className="text-cyan-400 text-lg font-semibold mb-2">🎯 Direção</div>
                              <p className="text-sm text-gray-400">flex-direction, flex-wrap</p>
                            </div>
                            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                              <div className="text-emerald-400 text-lg font-semibold mb-2">⚡ Ordem</div>
                              <p className="text-sm text-gray-400">order, flex-grow/shrink</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    } />
                    
                    {/* ROTAS DOS EXERCÍCIOS */}
                    <Route path="/ex01" element={
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white flex items-center">
                              <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 mr-3">
                                01
                              </span>
                              Exercício Flex 001
                            </h3>
                            <p className="text-gray-400 mt-1">Fundamentos do Flexbox</p>
                          </div>
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-violet-500/20 to-purple-600/20 text-violet-300 border border-violet-500/30">
                            Básico
                          </span>
                        </div>
                        <div className="rounded-xl border-2 border-dashed border-gray-700/50 p-6 bg-gray-900/30">
                          <Flex001 />
                        </div>
                      </div>
                    } />
                    
                    {/* PADRÃO PARA OS DEMAIS EXERCÍCIOS */}
                    <Route path="/ex02" element={<Flex002 />} />
                    <Route path="/ex03" element={<Flex003 />} />
                    <Route path="/ex04" element={<Flex004 />} />
                    <Route path="/ex05" element={<Flex005 />} />
                    <Route path="/ex06" element={<Flex006 />} />
                    <Route path="/ex07" element={<Flex007 />} />  
                    <Route path="/ex08" element={<Flex008 />} />  
                    <Route path="/ex09" element={<Flex009 />} /> 
                    <Route path="/ex010" element={<Flex010 />} /> 
                    <Route path="/ex011" element={<Flex011 />} /> 
                    <Route path="/ex012" element={<Flex012 />} /> 
                    <Route path="/ex013" element={<Flex013 />} /> 
                    <Route path="/ex014" element={<Flex014 />} /> 
                    {/* 404 PAGE */}
                    <Route path="*" element={
                      <div className="text-center py-20">
                        <div className="inline-block p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-red-500/20">
                          <div className="text-6xl mb-6">🔍</div>
                          <h2 className="text-2xl font-bold text-white mb-4">
                            Página não encontrada
                          </h2>
                          <p className="text-gray-300 mb-8">
                            O exercício que você está procurando não existe ou foi movido.
                          </p>
                          <Link 
                            to="/" 
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30"
                          >
                            ← Voltar para o início
                          </Link>
                        </div>
                      </div>
                    } />
                  </Routes>
                </div>
              </div>
            </div>

            {/* FOOTER DO CARD */}
            <div className="mt-8 flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                  Online
                </span>
                <span>Flexbox MasterClass v1.0</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>React 18 + React Router 6</span>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 text-violet-300">
                  Vite Inspired
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;