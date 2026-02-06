import { members } from '../data';
import { Users, MessageCircle, Heart, Star } from 'lucide-react';

const statusColors = {
  online: 'bg-mint',
  away: 'bg-sunshine',
  offline: 'bg-gray-300',
};

const statusLabels = {
  online: 'Online',
  away: 'Away',
  offline: 'Offline',
};

export function Members() {
  return (
    <div className="space-y-5 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Users className="text-peach" size={24} />
            Our Crew
          </h2>
          <p className="text-sm text-gray-400 mt-0.5">{members.length} amazing humans 💛</p>
        </div>
      </div>

      {/* Group Photo Banner */}
      <div className="bg-gradient-to-r from-coral via-bubblegum to-lavender rounded-3xl p-6 lg:p-8 text-center text-white shadow-lg">
        <div className="flex justify-center -space-x-3 mb-3">
          {members.map(m => (
            <div key={m.id} className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-xl lg:text-2xl border-2 border-white/40 hover:scale-125 hover:z-10 transition-transform cursor-pointer">
              {m.avatar}
            </div>
          ))}
        </div>
        <h3 className="text-lg lg:text-xl font-bold">The Squad 💪</h3>
        <p className="text-sm text-white/80">Together since 2021 • Inseparable since always</p>
      </div>

      {/* Member Grid — 2 cols on tablets, 3 on large desktops when right panel isn't visible */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {members.map((member, index) => (
          <div
            key={member.id}
            className="bg-white rounded-3xl border-2 border-sunshine/30 p-5 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer group"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl ${member.color} flex items-center justify-center text-2xl shadow-md group-hover:animate-wiggle`}>
                  {member.avatar}
                </div>
                <span className={`absolute -bottom-1 -right-1 w-4 h-4 ${statusColors[member.status]} rounded-full border-2 border-white`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-gray-800">{member.name}</h3>
                  <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    @{member.nickname}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-0.5">{member.bio}</p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className={`text-[10px] font-semibold ${statusColors[member.status]} text-white px-2 py-0.5 rounded-full`}>
                    {statusLabels[member.status]}
                  </span>
                  <span className="text-xs text-gray-400">{member.mood}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2 mt-4">
              <button className="flex-1 py-2 bg-sky/10 text-sky text-xs font-bold rounded-xl hover:bg-sky/20 transition-colors flex items-center justify-center gap-1">
                <MessageCircle size={12} /> Message
              </button>
              <button className="flex-1 py-2 bg-coral/10 text-coral text-xs font-bold rounded-xl hover:bg-coral/20 transition-colors flex items-center justify-center gap-1">
                <Heart size={12} /> Poke
              </button>
              <button className="py-2 px-3 bg-sunshine/20 text-amber-600 text-xs font-bold rounded-xl hover:bg-sunshine/30 transition-colors">
                <Star size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
