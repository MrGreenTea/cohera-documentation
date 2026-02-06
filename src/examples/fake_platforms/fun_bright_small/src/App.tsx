import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Events } from './components/Events';
import { Polls } from './components/Polls';
import { Chat } from './components/Chat';
import { Members } from './components/Members';
import { RightPanel } from './components/RightPanel';

export function App() {
  const [activeTab, setActiveTab] = useState('feed');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'feed': return <Feed />;
      case 'events': return <Events />;
      case 'polls': return <Polls />;
      case 'chat': return <Chat />;
      case 'members': return <Members />;
      default: return <Feed />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/50 via-pink-50/30 to-sky-50/30 font-[var(--font-family-display)]">
      <Header onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />

      <div className="flex">
        {/* Sidebar — off-canvas on mobile, sticky on lg+ */}
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} open={menuOpen} />

        {/* Overlay for mobile menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-30 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 pb-20 lg:pb-8">
          <div className="max-w-[1200px] mx-auto p-4 lg:p-6 xl:p-8">
            <div className="flex gap-6 2xl:gap-8">
              {/* Center content — fills available space */}
              <div className="flex-1 min-w-0">
                {renderContent()}
              </div>
              {/* Right Panel — visible on lg+ (laptops and above) */}
              {activeTab !== 'chat' && <RightPanel />}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t-2 border-sunshine/30 z-50 safe-bottom">
        <div className="flex items-center justify-around py-2 px-4">
          {[
            { id: 'feed', emoji: '🏠', label: 'Feed' },
            { id: 'events', emoji: '📅', label: 'Events' },
            { id: 'polls', emoji: '📊', label: 'Polls' },
            { id: 'chat', emoji: '💬', label: 'Chat' },
            { id: 'members', emoji: '👥', label: 'Crew' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-lemon/50 scale-110'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <span className="text-lg">{item.emoji}</span>
              <span className="text-[10px] font-bold">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
