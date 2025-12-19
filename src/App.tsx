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

  return (
    <div style={{ height: '100vh' }}>
      <MenuBar />
      <div className={styles.mainLayout}>
        <ActivityBar />
        <Explorer
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />
        <div className={styles.editorContainer}>
          <EditorTabs
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />
          <div className={styles.scrollContainer}>
            <section ref={homeRef} id="home">
              <Home
                onNavigate={scrollToSection}
                setActiveSection={setActiveSection}
              />
            </section>
            <section ref={projectsRef} id="projects">
              <Projects setActiveSection={setActiveSection} />
            </section>
            <section ref={aboutRef} id="about">
              <About setActiveSection={setActiveSection} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
