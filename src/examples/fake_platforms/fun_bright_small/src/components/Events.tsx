import { events, members } from '../data';
import { Calendar, Clock, Plus, ChevronRight } from 'lucide-react';

export function Events() {
  const getMember = (id: number) => members.find(m => m.id === id)!;

  return (
    <div className="space-y-5 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Calendar className="text-sky" size={24} />
            Upcoming Hangs
          </h2>
          <p className="text-sm text-gray-400 mt-0.5">Don't miss the fun! 🎉</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-sky to-ocean text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-sky/30 hover:scale-105 transition-all flex items-center gap-1.5">
          <Plus size={16} />
          New Event
        </button>
      </div>

      {/* Event Cards */}
      <div className="grid gap-4">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="bg-white rounded-3xl border-2 border-sunshine/30 overflow-hidden hover:shadow-lg transition-all hover:scale-[1.01] cursor-pointer group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`bg-gradient-to-r ${event.color} p-4 lg:p-5 flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <span className="text-3xl animate-float">{event.emoji}</span>
                <div>
                  <h3 className="text-white font-bold text-lg">{event.title}</h3>
                  <p className="text-white/80 text-sm">{event.description}</p>
                </div>
              </div>
              <ChevronRight className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" size={24} />
            </div>
            <div className="p-4 lg:p-5">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Calendar size={14} className="text-coral" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Clock size={14} className="text-sky" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    {event.attendees.slice(0, 5).map(id => {
                      const member = getMember(id);
                      return (
                        <div
                          key={id}
                          className={`w-7 h-7 rounded-full ${member.color} flex items-center justify-center text-xs border-2 border-white`}
                          title={member.name}
                        >
                          {member.avatar}
                        </div>
                      );
                    })}
                    {event.attendees.length > 5 && (
                      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500 border-2 border-white">
                        +{event.attendees.length - 5}
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 ml-1">{event.attendees.length} going</span>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 py-2 bg-gradient-to-r from-mint to-sky text-white text-sm font-bold rounded-xl hover:shadow-md transition-all">
                  I'm in! 🙋
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-500 text-sm font-medium rounded-xl hover:bg-gray-200 transition-colors">
                  Maybe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Calendar hint */}
      <div className="bg-gradient-to-br from-lemon/30 to-sunshine/20 rounded-3xl p-6 text-center border-2 border-sunshine/30">
        <p className="text-3xl mb-2">📅</p>
        <p className="font-bold text-gray-700">This week is packed!</p>
        <p className="text-sm text-gray-500 mt-1">4 hangouts planned • 6 friends confirmed</p>
      </div>
    </div>
  );
}
