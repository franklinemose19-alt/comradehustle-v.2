/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { JobBoard } from './components/JobBoard';
import { Marketplace } from './components/Marketplace';
import { Discover } from './components/Discover';
import { Wallet } from './components/Wallet';
import { LogOut, Mail, Phone, GraduationCap, MapPin } from 'lucide-react';

function AppContent() {
  const { user, loading, signInWithGoogle, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('home');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0B]">
        <div className="flex flex-col items-center gap-6">
           <div className="w-12 h-12 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
           </div>
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 animate-pulse">Synchronizing Node</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0B] text-white p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-10">
          <div className="w-20 h-20 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-blue-500/40 transform rotate-12">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div>
            <h1 className="text-6xl font-black tracking-tight italic">Comrade<span className="text-cyan-400">Hustle</span></h1>
            <p className="text-slate-400 mt-4 text-sm font-medium max-w-xs leading-relaxed uppercase tracking-widest">
              The premium campus economy <br /> built for the modern student.
            </p>
          </div>
          <button
            onClick={signInWithGoogle}
            className="group relative px-12 py-5 bg-white text-black rounded-3xl font-black uppercase tracking-widest text-[11px] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
          >
            <span className="relative z-10">Initialize Identity</span>
          </button>
        </div>
        <div className="absolute bottom-10 text-[9px] font-black text-white/20 uppercase tracking-[0.5em]">Kenya Campus Network · Secured v3.1</div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard onAction={(tab) => setActiveTab(tab)} />;
      case 'jobs':
        return <JobBoard />;
      case 'marketplace':
        return <Marketplace />;
      case 'discover':
        return <Discover />;
      case 'wallet':
        return <Wallet />;
      case 'chat':
        return (
          <div className="space-y-10 py-10">
            <h1 className="text-4xl font-extrabold text-white tracking-tight italic uppercase">Secure <span className="text-purple-400">Comms</span></h1>
            <div className="flex flex-col items-center justify-center space-y-8 bg-[#111114] border border-white/5 rounded-[3rem] p-12 shadow-2xl">
              <div className="p-8 bg-purple-500/10 rounded-[2.5rem] border border-purple-500/20 text-purple-400">
                <Mail size={48} />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold text-white mb-2">Encrypted Tunnel Clear</h2>
                <p className="text-slate-500 text-xs font-medium max-w-[200px] leading-relaxed uppercase tracking-widest">No active negotiations in progress.</p>
              </div>
              <button className="px-8 py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px]" onClick={() => setActiveTab('discover')}>Find Targets</button>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="space-y-10">
            <header className="flex flex-col items-center space-y-6">
              <div className="relative group">
                <div className="w-40 h-40 rounded-[3rem] bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-1.5 shadow-2xl animate-pulse group-hover:animate-none transition-all">
                  <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-[#0A0A0B] border-4 border-[#0A0A0B]">
                    <img src={user?.photoURL || ''} alt="Profile" className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 border-4 border-[#0A0A0B] rounded-2xl flex items-center justify-center shadow-lg">
                   <div className="w-3 h-3 bg-white rounded-full animate-ping" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-extrabold text-white tracking-tight uppercase italic">{user?.displayName}</h1>
                <p className="text-cyan-400 font-black text-[10px] uppercase tracking-[0.3em] mt-2 shadow-cyan-500/20">Citizen of JKUAT Main</p>
              </div>
            </header>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#111114] p-6 rounded-[2rem] border border-white/5 text-center shadow-xl">
                <p className="text-2xl font-mono font-bold text-white leading-none">12</p>
                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-2">Transmissions</p>
              </div>
              <div className="bg-[#111114] p-6 rounded-[2rem] border border-white/5 text-center shadow-xl">
                <p className="text-2xl font-mono font-bold text-white leading-none">4.9</p>
                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-2">Trust Score</p>
              </div>
              <div className="bg-[#111114] p-6 rounded-[2rem] border border-white/5 text-center shadow-xl">
                <p className="text-2xl font-mono font-bold text-white leading-none">8.4k</p>
                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-2">Hustle Val</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-[#111114] border border-white/5 rounded-[2.5rem] flex items-center gap-5 shadow-xl group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                   <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">University Node</p>
                  <p className="font-bold text-white text-sm">Jomo Kenyatta University</p>
                </div>
              </div>
              <div className="p-6 bg-[#111114] border border-white/5 rounded-[2.5rem] flex items-center gap-5 shadow-xl group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-black transition-all">
                   <Mail size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Authenticated Endpoint</p>
                  <p className="font-bold text-white text-sm truncate max-w-[200px]">{user?.email}</p>
                </div>
              </div>
              <div className="p-6 bg-[#111114] border border-white/5 rounded-[2.5rem] flex items-center gap-5 shadow-xl group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                   <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Deployment Location</p>
                  <p className="font-bold text-white text-sm">Main Campus, Hall 9</p>
                </div>
              </div>
            </div>

            <button 
              onClick={logout}
              className="w-full py-6 bg-red-500/5 hover:bg-red-500/10 text-red-500 border border-red-500/20 rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 transition-all"
            >
              <LogOut size={18} />
              Terminate Session
            </button>
          </div>
        );
      default:
        return <Dashboard onAction={(tab) => setActiveTab(tab)} />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
