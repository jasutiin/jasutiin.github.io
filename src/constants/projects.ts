import Chat from '../public/projects/uofcbazaar/chat.png';
import Home from '../public/projects/uofcbazaar/home.png';
import Login from '../public/projects/uofcbazaar/login.png';
import Website from '../public/projects/personal-website/projects.png';
import Title from '../public/projects/snake/title.png';
import First from '../public/projects/snake/first.png';
import Connect from '../public/projects/pictochat/connect.png';
import RoomSelect from '../public/projects/pictochat/roomselect.png';
import Room from '../public/projects/pictochat/room.png';
import Default from '../public/default.png';

const uofcbazaar = {
  uri: [Home, Login, Chat],
  name: 'UofCBazaar',
  description: `A platform for students to conveniently buy and sell items. Implements JWT tokens for authentication and authorization, password hashing using bcrypt(), and utilizes Supabase's real-time features.`,
  attributes: [
    'TypeScript',
    'React',
    'Tailwind CSS',
    'Deno',
    'Supabase',
    'Docker',
    'Git',
  ],
  links: [['Github', 'https://github.com/jasutiin/uofcbazaar']],
};

const looply = {
  uri: [Default],
  name: 'Looply',
  description: `A mobile video sharing platform. Uses AWS S3 for video storage, implements video compression for faster loading times, and incorporates React's Context API to manage settings and such.`,
  attributes: ['JavaScript', 'React Native', 'Express', 'MongoDB', 'AWS S3'],
  links: [['Github', 'https://github.com/jasutiin/looply']],
};

const pictochat = {
  uri: [Connect, RoomSelect, Room],
  name: 'Pictochat',
  description: `Based off of <redacted>'s chat app on the DS. Utilizes Socket.IO to implement real-time features.`,
  attributes: ['TypeScript', 'Vue', 'Java', 'Spring Boot', 'PostgreSQL'],
  links: [['Github', 'https://github.com/jasutiin/pictochat']],
};

const website = {
  uri: [Website],
  name: 'Personal Website',
  description:
    'My personal portfolio to showcase my projects! The design is based off of the GOAT of IDEs (VSCode).',
  attributes: ['TypeScript', 'React', 'SASS/SCSS'],
  links: [['Github', 'https://github.com/jasutiin/jasutiin.github.io']],
};

// const swapmeet = {
//   uri: [Default],
//   name: 'SwapMeet',
//   description: `Have some skills you're willing to share? Would you also like to learn new things? No need for paying for tutors, just meet people and swap!`,
//   attributes: ['Javascript', 'Next', 'Tailwind', 'Supabase'],
// };

const snakegame = {
  uri: [Title, First],
  name: 'Snake Game',
  description:
    'Made my own controller drivers for the Raspberry Pi. A take on the classic snake game but with enemies and an animated boss fight!',
  attributes: ['C', 'Raspberry Pi'],
  links: [],
};

const jasutiin = {
  uri: [Default],
  name: 'jasutiin',
  description:
    'I make videos for fun! Mainly focused on computer science content.',
  attributes: ['TikTok', 'YouTube', 'DaVinci Resolve'],
  links: [
    ['YouTube', 'https://www.youtube.com/@jasutiin.'],
    ['TikTok', 'https://www.tiktok.com/@jasutiin'],
  ],
};

const projects = [uofcbazaar, looply, pictochat, website, snakegame, jasutiin];

export default projects;
