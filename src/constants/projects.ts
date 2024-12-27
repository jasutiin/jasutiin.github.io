import Chat from '../public/projects/uofcbazaar/chat.png';
import Home from '../public/projects/uofcbazaar/home.png';
import Login from '../public/projects/uofcbazaar/login.png';
import Default from '../public/default.png';

const sampleProject = {
  uri: [Default],
  name: 'Looply',
  description: 'A mobile video sharing platform.',
  attributes: ['Javascript', 'React Native', 'Express', 'MongoDB', 'AWS S3'],
};

const sampleProject2 = {
  uri: [Home, Login, Chat],
  name: 'UofCBazaar',
  description: 'A platform for students to conveniently buy and sell items.',
  attributes: ['Typescript', 'React', 'TailwindCSS', 'Deno', 'Supabase'],
};

const sampleProject3 = {
  uri: [Default],
  name: 'SwapMeet',
  description: `Have some skills you're willing to share? Would you also like to learn new things? No need for paying for tutors, just meet people and swap!`,
  attributes: ['Javascript', 'Next', 'Tailwind CSS', 'Supabase'],
};

const sampleProject4 = {
  uri: [Default],
  name: 'Snake Game',
  description: 'so cool project very nice',
  attributes: ['C', 'Raspberry Pi'],
};

const sampleProject5 = {
  uri: [Default],
  name: 'jasutiin',
  description:
    'I make videos for fun! Mainly focused on computer science content.',
  attributes: ['TikTok', 'YouTube', 'Davinci Resolve'],
};

const projects = [
  sampleProject,
  sampleProject2,
  sampleProject3,
  sampleProject4,
  sampleProject5,
];

export default projects;
