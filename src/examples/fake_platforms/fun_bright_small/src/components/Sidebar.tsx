import { members } from '../data';
import { Home, Calendar, BarChart3, MessageCircle, Users, Heart, Settings } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  open: boolean;
}

const navItems = [
  { id: 'feed', label: 'Feed', icon: Home, color: 'text-coral' },
  { id: 'events', label: 'Events', icon: Calendar, color: 'text-sky' },
  { id: 'polls', label: 'Polls', icon: BarChart3, color: 'text-lavender' },
  { id: 'chat', label: 'Chat', icon: MessageCircle, color: 'text-mint' },
  { id: 'members', label: 'Crew', icon: Users, color: 'text-peach' },
];

export function Sidebar({ activeTab, onTabChange, open }: SidebarProps) {
  const onlineMembers = members.filter(m => m.status === 'online');

  return (
    <aside className={`
      fixed lg:sticky top-[var(--header-height)] left-0 z-40 
      h-[calc(100vh-var(--header-height))] w-64 shrink-0
      bg-white/90 backdrop-blur-xl border-r-2 border-sunshine/30 
      transform transition-transform duration-300 ease-in-out 
      overflow-y-auto overscroll-contain
      ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="p-4 space-y-5">
        {/* Navigation */}
        <nav className="space-y-1.5">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all
                ${activeTab === item.id
                  ? 'bg-gradient-to-r from-lemon/60 to-sunshine/40 shadow-sm scale-[1.02]'
                  : 'hover:bg-lemon/30 text-gray-600 hover:text-gray-900'
                }
              `}
            >
              <item.icon size={18} className={activeTab === item.id ? item.color : ''} />
              <span>{item.label}</span>
              {item.id === 'chat' && (
                <span className="ml-auto w-5 h-5 bg-coral rounded-full text-white text-[10px] flex items-center justify-center font-bold">3</span>
              )}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-sunshine/40" />

        {/* Online Friends */}
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 mb-3 flex items-center gap-1.5">
            <Heart size={12} className="text-coral" /> Online Now
          </h3>
          <div className="space-y-1">
            {onlineMembers.map(member => (
              <div
                key={member.id}
                className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-lemon/30 transition-colors cursor-pointer group"
              >
                <div className="relative">
                  <span className="text-xl">{member.avatar}</span>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-mint rounded-full border-2 border-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{member.nickname}</p>
                  <p className="text-[10px] text-gray-400 truncate">{member.mood}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t-2 border-dashed border-sunshine/40 pt-4">
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-xl text-sm text-gray-500 hover:bg-lemon/30 hover:text-gray-700 transition-colors">
            <Settings size={16} />
            <span>Settings</span>
          </button>
        </div>

        {/* Fun footer */}
        <div className="bg-gradient-to-br from-lemon/40 to-peach/30 rounded-2xl p-4 text-center">
          <p className="text-2xl mb-1">🌈</p>
          <p className="text-xs font-semibold text-gray-600">Vibes are immaculate today</p>
          <p className="text-[10px] text-gray-400 mt-1">{onlineMembers.length}/{members.length} friends online</p>
        </div>
      </div>
    </aside>
  );
}
