import { useEffect, useRef, useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import MenuBar from './components/MenuBar/MenuBar';
import ActivityBar from './components/ActivityBar/ActivityBar';
import Explorer from './components/Explorer/Explorer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Project from './pages/Project/Project';

import styles from './styles/main.module.scss';
import EditorTabs from './components/EditorTabs/EditorTabs';
import {
  getProjectBySlug,
  getProjectSlug,
  type SanityProject,
} from './sanity/projects';

export type SectionId = 'home' | 'about' | 'projects';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [activeProject, setActiveProject] = useState<SanityProject | null>(null);
  const [pendingSection, setPendingSection] = useState<SectionId | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: SectionId) => {
    setActiveSection(section);

    if (location.pathname !== '/') {
      setPendingSection(section);
      navigate('/');
      return;
    }

    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
    };
    refs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openProject = (project: SanityProject) => {
    setActiveProject(project);
    setActiveSection('projects');
    navigate(`/project/${getProjectSlug(project)}`);
  };

  const closeProject = () => {
    setActiveProject(null);
    navigate('/');
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

  useEffect(() => {
    if (location.pathname === '/') {
      if (pendingSection) {
        const refs = {
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
        };
        refs[pendingSection].current?.scrollIntoView({ behavior: 'smooth' });
        setPendingSection(null);
      }
      return;
    }

    const slug = location.pathname.split('/')[2];
    if (!slug) {
      return;
    }

    let isCurrent = true;
    setActiveSection('projects');

    getProjectBySlug(slug)
      .then((project) => {
        if (isCurrent) {
          setActiveProject(project);
        }
      })
      .catch(() => {
        if (isCurrent) {
          setActiveProject(null);
        }
      });

    return () => {
      isCurrent = false;
    };
  }, [location.pathname, pendingSection]);

  return (
    <div className={styles.appContainer}>
      <MenuBar />
      <div className={styles.mainLayout}>
        <ActivityBar
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />
        <Explorer
          activeProjectSlug={
            location.pathname.startsWith('/project/') && activeProject
              ? getProjectSlug(activeProject)
              : undefined
          }
          activeSection={activeSection}
          onProjectClick={openProject}
          onSectionClick={scrollToSection}
        />
        <div className={styles.editorContainer}>
          <EditorTabs
            activeProject={activeProject}
            activeSection={activeSection}
            isProjectActive={location.pathname.startsWith('/project/')}
            onProjectClick={() => {
              if (activeProject) {
                navigate(`/project/${getProjectSlug(activeProject)}`);
              }
            }}
            onProjectClose={closeProject}
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
