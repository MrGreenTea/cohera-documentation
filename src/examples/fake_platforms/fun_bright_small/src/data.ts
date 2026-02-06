export interface Member {
  id: number;
  name: string;
  nickname: string;
  avatar: string;
  status: 'online' | 'away' | 'offline';
  mood: string;
  bio: string;
  color: string;
}

export interface Post {
  id: number;
  authorId: number;
  content: string;
  timestamp: string;
  reactions: { emoji: string; count: number; reacted: boolean }[];
  comments: { authorId: number; text: string; timestamp: string }[];
  image?: string;
  tag?: string;
}

export interface Event {
  id: number;
  title: string;
  emoji: string;
  date: string;
  time: string;
  attendees: number[];
  color: string;
  description: string;
}

export interface Poll {
  id: number;
  question: string;
  options: { text: string; votes: number; voters: number[] }[];
  authorId: number;
  emoji: string;
}

export const members: Member[] = [
  { id: 1, name: 'Alex Chen', nickname: 'Lex', avatar: '🧑‍💻', status: 'online', mood: '🎮 gaming tonight!', bio: 'Code wizard & pizza enthusiast', color: 'bg-sky' },
  { id: 2, name: 'Maya Johnson', nickname: 'May', avatar: '🎨', status: 'online', mood: '☀️ beach day soon?', bio: 'Artist at heart, cat mom x3', color: 'bg-coral' },
  { id: 3, name: 'Sam Rivera', nickname: 'Sammy', avatar: '🎸', status: 'away', mood: '🎵 new song dropping', bio: 'Making music & bad jokes', color: 'bg-mint' },
  { id: 4, name: 'Jordan Lee', nickname: 'JoJo', avatar: '📸', status: 'online', mood: '🍕 who wants pizza??', bio: 'Photographer & forever hungry', color: 'bg-sunshine' },
  { id: 5, name: 'Taylor Kim', nickname: 'Tay', avatar: '🌱', status: 'offline', mood: '📚 finals week rip', bio: 'Plant parent & bookworm', color: 'bg-lavender' },
  { id: 6, name: 'Riley Park', nickname: 'Ri', avatar: '⚡', status: 'online', mood: '🏃 marathon training!', bio: 'Runner, baker, trouble maker', color: 'bg-peach' },
  { id: 7, name: 'Casey Wong', nickname: 'Case', avatar: '🎬', status: 'away', mood: '🎬 movie recs needed', bio: 'Film buff & snack connoisseur', color: 'bg-bubblegum' },
  { id: 8, name: 'Drew Martinez', nickname: 'D', avatar: '🏀', status: 'online', mood: '💪 gym arc continues', bio: 'Sports nerd & meme dealer', color: 'bg-ocean' },
];

export const posts: Post[] = [
  {
    id: 1,
    authorId: 4,
    content: 'okay who left their jacket at my place last weekend?? it\'s been staring at me from the couch for 3 days 👀',
    timestamp: '2 hours ago',
    reactions: [
      { emoji: '😂', count: 5, reacted: true },
      { emoji: '🙋', count: 2, reacted: false },
    ],
    comments: [
      { authorId: 3, text: 'LMAO that might be mine... oops 😅', timestamp: '1 hour ago' },
      { authorId: 1, text: 'not mine, I never take my jacket off 🧥', timestamp: '45 min ago' },
    ],
    tag: '🔍 Lost & Found',
  },
  {
    id: 2,
    authorId: 2,
    content: 'Just finished painting everyone\'s portraits as animals and I\'m crying at how accurate they are 🎨🐾 Gallery showing at my apartment Friday??',
    timestamp: '5 hours ago',
    reactions: [
      { emoji: '❤️', count: 7, reacted: true },
      { emoji: '🔥', count: 4, reacted: false },
      { emoji: '👀', count: 6, reacted: true },
    ],
    comments: [
      { authorId: 8, text: 'PLEASE tell me I\'m a golden retriever 🐕', timestamp: '4 hours ago' },
      { authorId: 6, text: 'I better not be a sloth 😤', timestamp: '3 hours ago' },
      { authorId: 2, text: '@Riley you\'re a cheetah obviously 🐆', timestamp: '3 hours ago' },
    ],
    tag: '🎨 Creative Corner',
  },
  {
    id: 3,
    authorId: 6,
    content: 'Made way too many brownies again... come get them before I eat all of them myself 🍫 Door\'s open!',
    timestamp: '8 hours ago',
    reactions: [
      { emoji: '🤤', count: 8, reacted: true },
      { emoji: '🏃', count: 3, reacted: false },
    ],
    comments: [
      { authorId: 1, text: 'ON MY WAY', timestamp: '7 hours ago' },
      { authorId: 7, text: 'save me the corner pieces pls 🙏', timestamp: '7 hours ago' },
    ],
    tag: '🍽️ Food Alert',
  },
  {
    id: 4,
    authorId: 1,
    content: 'Game night tournament bracket is UP! We\'re doing Mario Kart this time. Prepare to lose 😈🏎️',
    timestamp: '1 day ago',
    reactions: [
      { emoji: '🏎️', count: 6, reacted: false },
      { emoji: '💀', count: 3, reacted: true },
      { emoji: '🏆', count: 2, reacted: false },
    ],
    comments: [
      { authorId: 8, text: 'I\'m literally unbeatable on Rainbow Road', timestamp: '23 hours ago' },
      { authorId: 5, text: 'I\'ll ref since I always come last anyway 😭', timestamp: '22 hours ago' },
    ],
    tag: '🎮 Game Night',
  },
  {
    id: 5,
    authorId: 7,
    content: 'Movie marathon this Sunday! Theme: worst movies we can find. Bring your most questionable picks 🍿🎬',
    timestamp: '1 day ago',
    reactions: [
      { emoji: '🎬', count: 5, reacted: true },
      { emoji: '😈', count: 4, reacted: false },
    ],
    comments: [
      { authorId: 3, text: 'I have a movie so bad it will change your life', timestamp: '1 day ago' },
      { authorId: 4, text: 'I\'ll bring the projector!', timestamp: '20 hours ago' },
    ],
    tag: '🎬 Movie Night',
  },
];

export const events: Event[] = [
  { id: 1, title: 'Art Show at Maya\'s', emoji: '🎨', date: 'This Friday', time: '7 PM', attendees: [1, 3, 4, 6, 7, 8], color: 'from-coral to-bubblegum', description: 'Come see everyone as animals!' },
  { id: 2, title: 'Game Night Tournament', emoji: '🎮', date: 'Saturday', time: '6 PM', attendees: [1, 2, 3, 4, 6, 8], color: 'from-sky to-ocean', description: 'Mario Kart championship round' },
  { id: 3, title: 'Bad Movie Marathon', emoji: '🎬', date: 'Sunday', time: '3 PM', attendees: [2, 3, 5, 7], color: 'from-lavender to-grape', description: 'The worse the better!' },
  { id: 4, title: 'Group Hike', emoji: '🥾', date: 'Next Sat', time: '9 AM', attendees: [1, 5, 6, 8], color: 'from-mint to-sky', description: 'Eagle Peak trail, bring snacks!' },
];

export const polls: Poll[] = [
  {
    id: 1,
    question: 'Where should we go for Sam\'s birthday dinner? 🎂',
    options: [
      { text: '🍕 Luigi\'s Pizza', votes: 4, voters: [1, 4, 6, 8] },
      { text: '🍣 Sakura Sushi', votes: 2, voters: [2, 7] },
      { text: '🌮 Taco Fiesta', votes: 3, voters: [3, 5, 6] },
      { text: '🍔 Burger Barn', votes: 1, voters: [1] },
    ],
    authorId: 2,
    emoji: '🎉',
  },
  {
    id: 2,
    question: 'Next group costume theme for Halloween? 🎃',
    options: [
      { text: '🦸 Superheroes', votes: 3, voters: [1, 3, 8] },
      { text: '👻 Classic Horror', votes: 2, voters: [5, 7] },
      { text: '🎮 Video Game Characters', votes: 5, voters: [1, 2, 4, 6, 8] },
      { text: '📺 TV Show Cast', votes: 2, voters: [3, 7] },
    ],
    authorId: 1,
    emoji: '🎃',
  },
];

export const chatMessages = [
  { authorId: 4, text: 'anyone wanna grab coffee? ☕', timestamp: '10 min ago' },
  { authorId: 1, text: 'YES please I need caffeine so bad', timestamp: '8 min ago' },
  { authorId: 6, text: 'I just made a fresh pot if you wanna come over!', timestamp: '7 min ago' },
  { authorId: 4, text: 'omw!! 🏃‍♂️', timestamp: '6 min ago' },
  { authorId: 2, text: 'wait for meee', timestamp: '5 min ago' },
  { authorId: 8, text: 'this is a whole coffee party now lol', timestamp: '3 min ago' },
  { authorId: 3, text: 'save me a cup!! 🙏', timestamp: '1 min ago' },
];
