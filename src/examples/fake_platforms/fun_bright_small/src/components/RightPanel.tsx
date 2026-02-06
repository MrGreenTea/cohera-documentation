import { members, events } from '../data';
import { TrendingUp, Calendar, Flame, Gift, Star } from 'lucide-react';

const quickBits = [
  { emoji: '🎂', text: "Sam's birthday is in 3 days!", color: 'bg-bubblegum/10 border-bubblegum/20' },
  { emoji: '🏆', text: 'Drew won last game night!', color: 'bg-sunshine/20 border-sunshine/40' },
  { emoji: '📸', text: '47 new photos in shared album', color: 'bg-sky/10 border-sky/20' },
];

const trendingTopics = [
  { tag: '#GameNight', count: 12, icon: '🎮' },
  { tag: '#FoodAlert', count: 8, icon: '🍕' },
  { tag: '#BeachDay', count: 6, icon: '🏖️' },
  { tag: '#MovieRecs', count: 5, icon: '🎬' },
];

export function RightPanel() {
  const nextEvent = events[0];
  const getMember = (id: number) => members.find(m => m.id === id)!;

  return (
    <div className="hidden lg:block w-72 xl:w-80 shrink-0 space-y-5">
      {/* Next Event */}
      <div className={`bg-gradient-to-br ${nextEvent.color} rounded-3xl p-5 text-white shadow-lg`}>
        <div className="flex items-center gap-2 mb-3">
          <Calendar size={16} />
          <span className="text-xs font-bold uppercase tracking-wider opacity-80">Next Hangout</span>
        </div>
        <span className="text-3xl animate-float inline-block">{nextEvent.emoji}</span>
        <h3 className="font-bold text-lg mt-2">{nextEvent.title}</h3>
        <p className="text-sm text-white/80">{nextEvent.date} • {nextEvent.time}</p>
        <div className="flex -space-x-2 mt-3">
          {nextEvent.attendees.slice(0, 4).map(id => (
            <div key={id} className="w-7 h-7 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-xs border-2 border-white/30">
              {getMember(id).avatar}
            </div>
          ))}
          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-[10px] font-bold border-2 border-white/30">
            +{nextEvent.attendees.length - 4}
          </div>
        </div>
      </div>

      {/* Quick Bits */}
      <div className="bg-white rounded-3xl border-2 border-sunshine/30 p-4 space-y-3">
        <h3 className="font-bold text-gray-800 flex items-center gap-2 text-sm">
          <Flame size={16} className="text-coral" />
          Quick Bits
        </h3>
        {quickBits.map((bit, i) => (
          <div key={i} className={`flex items-center gap-2.5 p-2.5 rounded-xl border-2 ${bit.color} cursor-pointer hover:scale-[1.02] transition-transform`}>
            <span className="text-lg">{bit.emoji}</span>
            <span className="text-xs font-medium text-gray-700">{bit.text}</span>
          </div>
        ))}
      </div>

      {/* Trending */}
      <div className="bg-white rounded-3xl border-2 border-sunshine/30 p-4 space-y-3">
        <h3 className="font-bold text-gray-800 flex items-center gap-2 text-sm">
          <TrendingUp size={16} className="text-mint" />
          Trending in Our Group
        </h3>
        {trendingTopics.map((topic, i) => (
          <div key={i} className="flex items-center justify-between py-1.5 hover:bg-lemon/20 px-2 rounded-lg cursor-pointer transition-colors">
            <div className="flex items-center gap-2">
              <span className="text-sm">{topic.icon}</span>
              <span className="text-sm font-semibold text-gray-700">{topic.tag}</span>
            </div>
            <span className="text-[10px] text-gray-400 font-medium">{topic.count} posts</span>
          </div>
        ))}
      </div>

      {/* Birthday reminder */}
      <div className="bg-gradient-to-br from-lemon/40 to-sunshine/30 rounded-3xl p-5 text-center border-2 border-sunshine/30">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Gift size={18} className="text-coral" />
          <span className="font-bold text-gray-700 text-sm">Birthday Coming!</span>
        </div>
        <span className="text-3xl inline-block animate-float">🎸</span>
        <p className="font-bold text-gray-800 mt-1">Sam turns 23!</p>
        <p className="text-xs text-gray-500">in 3 days • Dec 18th</p>
        <button className="mt-3 px-4 py-2 bg-white/80 text-sm font-bold text-coral rounded-full hover:bg-white transition-colors border border-coral/20">
          Plan surprise 🤫
        </button>
      </div>

      {/* Streak */}
      <div className="bg-white rounded-3xl border-2 border-sunshine/30 p-4 text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          <Star size={16} className="text-sunshine fill-sunshine" />
          <Star size={16} className="text-sunshine fill-sunshine" />
          <Star size={16} className="text-sunshine fill-sunshine" />
        </div>
        <p className="text-sm font-bold text-gray-700">47 Day Streak! 🔥</p>
        <p className="text-[10px] text-gray-400">Someone posts every single day</p>
      </div>
    </div>
  );
}
