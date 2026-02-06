import { useState } from 'react';
import { Bell, Search, Sparkles, Menu, X } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export function Header({ onMenuToggle, menuOpen }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b-2 border-sunshine/40 shadow-sm h-[var(--header-height)]">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-xl hover:bg-lemon/50 transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-coral via-bubblegum to-lavender flex items-center justify-center animate-wiggle shadow-md">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-coral via-bubblegum to-lavender bg-clip-text text-transparent leading-tight">
                The Hangout
              </h1>
              <p className="text-[10px] text-gray-400 font-medium -mt-0.5">our little corner ✨</p>
            </div>
          </div>
        </div>

        {/* Desktop search bar — always visible on lg+ */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search the hangout..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-lemon/20 border-2 border-sunshine/30 text-sm focus:outline-none focus:border-bubblegum/40 focus:bg-white transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile search toggle */}
          {searchOpen && (
            <div className="animate-pop-in lg:hidden">
              <input
                type="text"
                placeholder="Search..."
                className="w-36 sm:w-52 px-4 py-2 rounded-full bg-lemon/30 border-2 border-sunshine/50 text-sm focus:outline-none focus:border-bubblegum/50 focus:bg-white transition-all placeholder:text-gray-400"
                autoFocus
              />
            </div>
          )}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="lg:hidden p-2.5 rounded-full hover:bg-lemon/50 transition-colors text-gray-500 hover:text-coral"
          >
            <Search size={19} />
          </button>
          <button className="relative p-2.5 rounded-full hover:bg-lemon/50 transition-colors text-gray-500 hover:text-sky">
            <Bell size={19} />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-coral rounded-full animate-pulse-soft" />
          </button>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky to-ocean flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:scale-110 transition-transform shadow-md">
            🧑‍💻
          </div>
        </div>
      </div>
    </header>
  );
}
