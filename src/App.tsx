import { useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import MenuBar from './components/MenuBar/MenuBar';
import ActivityBar from './components/ActivityBar/ActivityBar';
import Explorer from './components/Explorer/Explorer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Project from './pages/Project/Project';

import styles from './styles/main.module.scss';
import EditorTabs from './components/EditorTabs/EditorTabs';

export type SectionId = 'home' | 'about' | 'projects';

function App() {
  const navigate = useNavigate();
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

  useEffect(() => {
    const redirectedPath = window.sessionStorage.getItem('redirectPath');

    if (redirectedPath) {
      window.sessionStorage.removeItem('redirectPath');
      navigate(redirectedPath, { replace: true });
    }
  }, [navigate]);

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
            <Routes>
              <Route
                path="/"
                element={
                  <>
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
                  </>
                }
              />
              <Route path="/project/:slug" element={<Project />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
