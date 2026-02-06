import { useState } from 'react';
import { polls, members } from '../data';
import { BarChart3, Plus, Check } from 'lucide-react';

export function Polls() {
  const [votedPolls, setVotedPolls] = useState<Record<string, number>>({});
  const getMember = (id: number) => members.find(m => m.id === id)!;

  const handleVote = (pollId: number, optionIndex: number) => {
    setVotedPolls(prev => ({ ...prev, [pollId]: optionIndex }));
  };

  return (
    <div className="space-y-5 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <BarChart3 className="text-lavender" size={24} />
            Group Polls
          </h2>
          <p className="text-sm text-gray-400 mt-0.5">Democracy in action! 🗳️</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-lavender to-grape text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-lavender/30 hover:scale-105 transition-all flex items-center gap-1.5">
          <Plus size={16} />
          New Poll
        </button>
      </div>

      {/* Polls */}
      {polls.map((poll) => {
        const author = getMember(poll.authorId);
        const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0);
        const voted = votedPolls[poll.id];

        return (
          <div key={poll.id} className="bg-white rounded-3xl border-2 border-sunshine/30 p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{poll.emoji}</span>
              <div>
                <h3 className="font-bold text-gray-800">{poll.question}</h3>
                <p className="text-xs text-gray-400">Asked by {author.nickname} • {totalVotes} votes</p>
              </div>
            </div>

            <div className="space-y-2.5">
              {poll.options.map((option, i) => {
                const percentage = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
                const isSelected = voted === i;
                const isWinning = option.votes === Math.max(...poll.options.map(o => o.votes));

                return (
                  <button
                    key={i}
                    onClick={() => handleVote(poll.id, i)}
                    className={`
                      w-full relative overflow-hidden rounded-2xl border-2 p-3 text-left transition-all
                      ${isSelected
                        ? 'border-lavender/50 bg-lavender/5'
                        : 'border-gray-100 hover:border-sunshine/50 hover:bg-lemon/10'
                      }
                    `}
                  >
                    <div
                      className={`absolute inset-y-0 left-0 transition-all duration-500 rounded-2xl ${
                        isWinning ? 'bg-gradient-to-r from-lavender/20 to-bubblegum/10' : 'bg-lemon/20'
                      }`}
                      style={{ width: voted !== undefined ? `${percentage}%` : '0%' }}
                    />
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {isSelected && (
                          <span className="w-5 h-5 bg-lavender rounded-full flex items-center justify-center animate-pop-in">
                            <Check size={12} className="text-white" />
                          </span>
                        )}
                        <span className={`text-sm font-medium ${isSelected ? 'text-lavender' : 'text-gray-700'}`}>
                          {option.text}
                        </span>
                      </div>
                      {voted !== undefined && (
                        <span className={`text-sm font-bold ${isWinning ? 'text-lavender' : 'text-gray-400'}`}>
                          {percentage}%
                        </span>
                      )}
                    </div>
                    {voted !== undefined && (
                      <div className="relative flex -space-x-1 mt-2">
                        {option.voters.slice(0, 4).map(id => (
                          <span key={id} className="text-xs" title={getMember(id).name}>{getMember(id).avatar}</span>
                        ))}
                        {option.voters.length > 4 && (
                          <span className="text-[10px] text-gray-400 ml-1">+{option.voters.length - 4}</span>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
