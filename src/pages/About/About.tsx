import { useRef, useEffect } from 'react';
import styles from './About.module.scss';

function About() {
  const containerRef = useRef<HTMLDivElement>(null);

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
            I like to boulder (mainly climb indoor v4-v5)
          </li>
          <li className={styles.hiddenItemX}>
            I peaked #~5000 on osu! but I'm washed now
          </li>
          <li className={styles.hiddenItemX}>
            My favourite colours are #05472A and #002366
          </li>
          <li className={styles.hiddenItemX}>
            I used to play the alto saxophone and clarinet in high school
          </li>
          <li className={styles.hiddenItemX}>
            I used to post on{' '}
            <a href="https://www.tiktok.com/@jasutiin" target="_blank">
              <span className={styles.redText}>Tik</span>
              <span className={styles.blueText}>Tok</span>
            </a>{' '}
            and{' '}
            <a href="https://www.youtube.com/@jasutiin." target="_blank">
              <span className={styles.redText}>YouTube</span>
            </a>
          </li>
        </ul>

        <h2 className={`${styles.title} ${styles.hiddenSubHeaderX}`}>
          Experience
        </h2>
        <ul className={styles.list}>
          <li className={styles.hiddenItemX}>
            IT Developer Co-op @ <span className={styles.blueText}>CCC</span>
          </li>
        </ul>

        <h2 className={`${styles.title} ${styles.hiddenSubHeaderX}`}>
          Extracurriculars
        </h2>
        <ul className={styles.list}>
          <li className={styles.hiddenItemX}>
            Mobile and Wearables Developer @{' '}
            <span className={styles.greenText}>Tech Start</span>
          </li>
          <li className={styles.hiddenItemX}>
            Fullstack Developer @{' '}
            <span className={styles.redText}>Code the Change</span>
          </li>
          <li className={styles.hiddenItemX}>
            Student Software Developer @{' '}
            <span className={styles.greenText}>BMERIT</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
