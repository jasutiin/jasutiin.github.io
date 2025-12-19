import { useEffect, useRef } from 'react';
import styles from './Home.module.scss';
import type { SectionId } from '../../App';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

interface HomeProps {
  onNavigate: (section: SectionId) => void;
  setActiveSection: (section: SectionId) => void;
}

function Home({ onNavigate, setActiveSection }: HomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('home');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      sectionObserver.observe(containerRef.current);
    }

    return () => sectionObserver.disconnect();
  }, [setActiveSection]);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Header observed:', entry.target);
            entry.target.classList.add(styles.showX);
          }
        });
      },
      { threshold: 0.1 }
    );

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Item observed:', entry.target);
            entry.target.classList.add(styles.showY);
          }
        });
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      const headers = containerRef.current.querySelectorAll('h1, p');
      const items = containerRef.current.querySelectorAll('.animate-item');

      headers.forEach((header) => headerObserver.observe(header));
      items.forEach((item) => itemObserver.observe(item));
    }

    return () => {
      headerObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.content}>
        <h1 className={`${styles.name} ${styles.hiddenItemX}`}>
          Justine <br />
          Mangaliman
        </h1>
        <p className={styles.hiddenHeaderX}>BSc CS @ UCalgary</p>
        <div>
          <button
            onClick={() => onNavigate('projects')}
            className={`${styles.link} ${styles.hiddenSlowY} animate-item`}
          >
            See my projects!
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`${styles.link} ${styles.second} ${styles.hiddenSlowY} animate-item`}
          >
            Learn more about me!
          </button>
        </div>
        <div>
          <a
            href="https://github.com/jasutiin"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.noUnderline} ${styles.third} ${styles.hiddenSlowY} animate-item`}
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/jmnglmn/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.noUnderline} ${styles.fourth} ${styles.hiddenSlowY} animate-item`}
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
