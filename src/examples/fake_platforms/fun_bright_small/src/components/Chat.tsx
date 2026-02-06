import { useState } from 'react';
import { chatMessages, members } from '../data';
import { Send, Smile, Image, Mic, Hash, Phone, Video } from 'lucide-react';

export function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(chatMessages);
  const getMember = (id: number) => members.find(m => m.id === id)!;
  const onlineMembers = members.filter(m => m.status === 'online');

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages(prev => [...prev, { authorId: 1, text: message, timestamp: 'Just now' }]);
    setMessage('');
  };

  return (
    <div className="animate-slide-up flex flex-col" style={{ height: 'calc(100vh - var(--header-height) - 80px)' }}>
      {/* Chat Header */}
      <div className="bg-white rounded-t-3xl border-2 border-b-0 border-sunshine/30 p-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mint to-sky flex items-center justify-center text-lg">
            💬
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Group Chat</h2>
            <p className="text-xs text-gray-400">
              {onlineMembers.length} friends online
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Desktop-only actions */}
          <div className="hidden md:flex items-center gap-1">
            <button className="p-2 rounded-full hover:bg-lemon/30 text-gray-400 hover:text-sky transition-colors" title="Voice call">
              <Phone size={16} />
            </button>
            <button className="p-2 rounded-full hover:bg-lemon/30 text-gray-400 hover:text-mint transition-colors" title="Video call">
              <Video size={16} />
            </button>
            <button className="p-2 rounded-full hover:bg-lemon/30 text-gray-400 hover:text-lavender transition-colors" title="Channels">
              <Hash size={16} />
            </button>
          </div>
          <div className="w-px h-6 bg-sunshine/30 hidden md:block" />
          <div className="flex -space-x-2">
            {onlineMembers.slice(0, 5).map(m => (
              <div key={m.id} className={`w-7 h-7 rounded-full ${m.color} flex items-center justify-center text-xs border-2 border-white`}>
                {m.avatar}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 bg-gradient-to-b from-lemon/10 to-white border-x-2 border-sunshine/30 overflow-y-auto p-4 lg:p-6 space-y-4">
        {/* Date divider */}
        <div className="flex items-center gap-3 my-2">
          <div className="flex-1 border-t border-dashed border-sunshine/40" />
          <span className="text-[10px] font-bold text-gray-400 bg-lemon/30 px-3 py-1 rounded-full">Today</span>
          <div className="flex-1 border-t border-dashed border-sunshine/40" />
        </div>

        {messages.map((msg, i) => {
          const author = getMember(msg.authorId);
          const isMe = msg.authorId === 1;

          return (
            <div key={i} className={`flex gap-2.5 ${isMe ? 'flex-row-reverse' : ''} animate-slide-up`} style={{ animationDelay: `${i * 50}ms` }}>
              {!isMe && (
                <div className={`w-8 h-8 rounded-full ${author.color} flex items-center justify-center text-sm shrink-0 self-end`}>
                  {author.avatar}
                </div>
              )}
              <div className={`max-w-[70%] lg:max-w-[60%] ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
                {!isMe && (
                  <span className="text-[10px] font-semibold text-gray-500 ml-2 mb-0.5">{author.nickname}</span>
                )}
                <div className={`
                  px-4 py-2.5 text-sm leading-relaxed
                  ${isMe
                    ? 'bg-gradient-to-r from-sky to-ocean text-white rounded-2xl rounded-br-sm'
                    : 'bg-white border-2 border-sunshine/20 text-gray-700 rounded-2xl rounded-bl-sm shadow-sm'
                  }
                `}>
                  {msg.text}
                </div>
                <span className={`text-[10px] text-gray-400 mt-0.5 ${isMe ? 'mr-2' : 'ml-2'}`}>{msg.timestamp}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input bar */}
      <div className="bg-white rounded-b-3xl border-2 border-t-0 border-sunshine/30 p-4 shrink-0">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-lemon/30 text-gray-400 hover:text-bubblegum transition-colors">
            <Image size={18} />
          </button>
          <button className="p-2 rounded-full hover:bg-lemon/30 text-gray-400 hover:text-sunshine transition-colors">
            <Smile size={18} />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message... 💬"
            className="flex-1 bg-lemon/20 rounded-full px-4 py-2.5 text-sm border-2 border-transparent focus:border-sky/30 focus:bg-white focus:outline-none transition-colors"
          />
          <button className="p-2 rounded-full hover:bg-lemon/30 text-gray-400 hover:text-mint transition-colors">
            <Mic size={18} />
          </button>
          <button
            onClick={sendMessage}
            className="p-2.5 rounded-full bg-gradient-to-r from-sky to-ocean text-white hover:shadow-lg hover:shadow-sky/30 hover:scale-110 transition-all"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
