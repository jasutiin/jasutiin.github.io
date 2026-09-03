import { useRef, useEffect } from 'react';
import styles from './About.module.scss';
import type { SectionId } from '../../App';

interface AboutProps {
  setActiveSection: (section: SectionId) => void;
}

function About({ setActiveSection }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('about');
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(containerRef.current);
            entry.target.classList.add(styles.showX);
          }
        });
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('h1, h2, li');
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <h1 className={`${styles.title} ${styles.hiddenHeaderX}`}>About Me</h1>
      <div className={styles.content}>
        <h2 className={`${styles.title} ${styles.hiddenSubHeaderX}`}>Facts</h2>
        <ul className={styles.list}>
          <li className={styles.hiddenItemX}>
            I like to go bouldering! My peak grade is a C6 at{' '}
            <a
              href="https://www.calgaryclimbing.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.yellowText}>
                <u>CCC</u>
              </span>
            </a>
            .
          </li>
          <li className={styles.hiddenItemX}>
            I dislocated my shoulder the day I got my first C6 :(
          </li>
          <li className={styles.hiddenItemX}>
            I peaked #~5000 on osu! but I'm washed now
          </li>
          <li className={styles.hiddenItemX}>
            I used to play the alto saxophone and clarinet in high school
          </li>
          <li className={styles.hiddenItemX}>
            I post very very very very infrequently on{' '}
            <a href="https://www.tiktok.com/@jasutiin" target="_blank">
              <span className={styles.redText}>
                <u>Tik</u>
              </span>
              <span className={styles.blueText}>
                <u>Tok</u>
              </span>
            </a>{' '}
            and{' '}
            <a href="https://www.youtube.com/@jasutiin." target="_blank">
              <span className={styles.redText}>
                <u>YouTube</u>
              </span>
            </a>
          </li>
        </ul>

        <h2 className={`${styles.title} ${styles.hiddenSubHeaderX}`}>
          Experience
        </h2>
        <ul className={styles.list}>
          <li className={styles.hiddenItemX}>
            Data Modelling Intern @{' '}
            <a href="https://www.aeso.ca/" target="_blank" rel="noreferrer">
              <span className={styles.blueText}>
                <u>AESO</u>
              </span>
            </a>
          </li>
          <li className={styles.hiddenItemX}>
            Software Developer Co-op @{' '}
            <a href="https://calgarycounselling.com/" target="_blank">
              <span className={styles.blueText}>
                <u>CCC</u>
              </span>
            </a>
          </li>
        </ul>

        <h2 className={`${styles.title} ${styles.hiddenSubHeaderX}`}>
          Extracurriculars
        </h2>
        <ul className={styles.list}>
          <li className={styles.hiddenItemX}>
            Software Developer @{' '}
            <a href="https://techstartucalgary.com/" target="_blank">
              <span className={styles.greenText}>
                <u>Tech Start</u>
              </span>
            </a>
          </li>
          <li className={styles.hiddenItemX}>
            Fullstack Developer @{' '}
            <a href="https://www.codethechangeyyc.ca/" target="_blank">
              <span className={styles.redText}>
                <u>Code the Change</u>
              </span>
            </a>
          </li>
          <li className={styles.hiddenItemX}>
            Software Developer @{' '}
            <a href="https://bmerit.vercel.app" target="_blank">
              <span className={styles.greenText}>
                <u>BMERIT</u>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
