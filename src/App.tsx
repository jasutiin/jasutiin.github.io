import { useState, useRef } from 'react';

import MenuBar from './components/MenuBar/MenuBar';
import ActivityBar from './components/ActivityBar/ActivityBar';
import Explorer from './components/Explorer/Explorer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

import styles from './styles/main.module.scss';
import EditorTabs from './components/EditorTabs/EditorTabs';

export type SectionId = 'home' | 'about' | 'projects';

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [scrollY, setScrollY] = useState(0);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: SectionId) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
    };
    refs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollY(e.currentTarget.scrollTop);
  };

  return (
    <div className={styles.appContainer}>
      <MenuBar />
      <div className={styles.mainLayout}>
        <ActivityBar
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />
        <Explorer
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />
        <div className={styles.editorContainer}>
          <EditorTabs
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />
          <div className={styles.scrollContainer} onScroll={handleScroll}>
            <section ref={homeRef} id="home">
              <Home
                onNavigate={scrollToSection}
                setActiveSection={setActiveSection}
                scrollY={scrollY}
              />
            </section>
            <section ref={aboutRef} id="about">
              <About setActiveSection={setActiveSection} />
            </section>
            <section ref={projectsRef} id="projects">
              <Projects setActiveSection={setActiveSection} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
