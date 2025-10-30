import UofCBazaarChat from '../public/projects/uofcbazaar/chat.png';
import UofCBazaarHome from '../public/projects/uofcbazaar/home.png';
import UofCBazaarLogin from '../public/projects/uofcbazaar/login.png';
import MyIBDMobile from '../public/projects/myibdcompass/myibdmobile.png';

const myibdcompass = {
  uri: [MyIBDMobile],
  name: 'My IBD Compass',
  description: `A cross-platform mobile app helping IBD patients track symptoms, medications, and health metrics. Implements Supabase Auth with SecureStore for secure token management.`,
  attributes: [
    'TypeScript',
    'Python',
    'React Native',
    'FastAPI',
    'Supabase',
    'Git',
  ],
  links: [['Live', 'https://www.myibdcompass.ca/']],
};

const uofcbazaar = {
  uri: [UofCBazaarHome, UofCBazaarLogin, UofCBazaarChat],
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

const projects = [myibdcompass, uofcbazaar];

export default projects;
