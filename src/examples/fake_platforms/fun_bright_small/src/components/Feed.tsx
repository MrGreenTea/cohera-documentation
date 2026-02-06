import { useState } from 'react';
import { posts, members } from '../data';
import { MessageCircle, Share2, Smile, Send, Image, MapPin, Sparkles } from 'lucide-react';

const tagColors: Record<string, string> = {
  '🔍 Lost & Found': 'bg-sunshine/30 text-amber-700',
  '🎨 Creative Corner': 'bg-bubblegum/20 text-pink-700',
  '🍽️ Food Alert': 'bg-peach/30 text-orange-700',
  '🎮 Game Night': 'bg-sky/20 text-blue-700',
  '🎬 Movie Night': 'bg-lavender/20 text-purple-700',
};

export function Feed() {
  const [newPost, setNewPost] = useState('');
  const [expandedComments, setExpandedComments] = useState<number[]>([]);
  const [likedReactions, setLikedReactions] = useState<Record<string, boolean>>({});

  const getMember = (id: number) => members.find(m => m.id === id)!;

  const toggleComments = (postId: number) => {
    setExpandedComments(prev =>
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  const toggleReaction = (postId: number, emoji: string) => {
    const key = `${postId}-${emoji}`;
    setLikedReactions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-5 animate-slide-up">
      {/* New Post Card */}
      <div className="bg-white rounded-3xl border-2 border-sunshine/40 p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky to-ocean flex items-center justify-center text-lg shrink-0">
            🧑‍💻
          </div>
          <div className="flex-1">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind, Lex? 💭"
              className="w-full resize-none rounded-2xl bg-lemon/20 border-2 border-transparent focus:border-sunshine/60 p-3 text-sm placeholder:text-gray-400 focus:outline-none transition-colors min-h-[60px]"
              rows={2}
            />
            <div className="flex items-center justify-between mt-3">
              <div className="flex gap-2">
                <button className="p-2 rounded-full hover:bg-bubblegum/10 text-bubblegum transition-colors">
                  <Image size={18} />
                </button>
                <button className="p-2 rounded-full hover:bg-mint/20 text-mint transition-colors">
                  <MapPin size={18} />
                </button>
                <button className="p-2 rounded-full hover:bg-sunshine/30 text-amber-500 transition-colors">
                  <Smile size={18} />
                </button>
              </div>
              <button className="px-5 py-2 bg-gradient-to-r from-coral to-bubblegum text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-coral/30 hover:scale-105 transition-all flex items-center gap-1.5">
                <Sparkles size={14} />
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post, index) => {
        const author = getMember(post.authorId);
        return (
          <div
            key={post.id}
            className="bg-white rounded-3xl border-2 border-sunshine/30 p-5 shadow-sm hover:shadow-md transition-all hover:border-sunshine/50 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Author */}
            <div className="flex items-start gap-3">
              <div className={`w-11 h-11 rounded-full ${author.color} flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform`}>
                {author.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-gray-800">{author.nickname}</span>
                  <span className="text-xs text-gray-400">• {post.timestamp}</span>
                  {post.tag && (
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagColors[post.tag] || 'bg-gray-100 text-gray-600'}`}>
                      {post.tag}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{post.content}</p>
              </div>
            </div>

            {/* Reactions */}
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              {post.reactions.map((reaction) => {
                const key = `${post.id}-${reaction.emoji}`;
                const isReacted = likedReactions[key] ?? reaction.reacted;
                return (
                  <button
                    key={reaction.emoji}
                    onClick={() => toggleReaction(post.id, reaction.emoji)}
                    className={`
                      flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-all
                      ${isReacted
                        ? 'bg-bubblegum/15 border-2 border-bubblegum/30 scale-105'
                        : 'bg-gray-50 border-2 border-gray-100 hover:border-sunshine/50 hover:bg-lemon/20'
                      }
                    `}
                  >
                    <span>{reaction.emoji}</span>
                    <span className={`text-xs font-semibold ${isReacted ? 'text-bubblegum' : 'text-gray-500'}`}>
                      {isReacted && !reaction.reacted ? reaction.count + 1 : !isReacted && reaction.reacted ? reaction.count - 1 : reaction.count}
                    </span>
                  </button>
                );
              })}
              <button className="p-1.5 rounded-full hover:bg-lemon/30 text-gray-400 hover:text-sunshine transition-colors">
                <Smile size={16} />
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
              <button
                onClick={() => toggleComments(post.id)}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-sky transition-colors font-medium"
              >
                <MessageCircle size={16} />
                <span>{post.comments.length} comments</span>
              </button>
              <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-mint transition-colors font-medium">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>

            {/* Comments */}
            {expandedComments.includes(post.id) && (
              <div className="mt-3 space-y-3 animate-slide-up">
                {post.comments.map((comment, i) => {
                  const commenter = getMember(comment.authorId);
                  return (
                    <div key={i} className="flex gap-2 ml-2">
                      <span className="text-sm mt-0.5">{commenter.avatar}</span>
                      <div className="bg-lemon/20 rounded-2xl rounded-tl-sm px-3 py-2 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-gray-700">{commenter.nickname}</span>
                          <span className="text-[10px] text-gray-400">{comment.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-0.5">{comment.text}</p>
                      </div>
                    </div>
                  );
                })}
                <div className="flex gap-2 ml-2">
                  <span className="text-sm mt-1">🧑‍💻</span>
                  <div className="flex-1 flex gap-2">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm border-2 border-transparent focus:border-sky/30 focus:bg-white focus:outline-none transition-colors"
                    />
                    <button className="p-2 rounded-full bg-sky/10 text-sky hover:bg-sky/20 transition-colors">
                      <Send size={14} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
