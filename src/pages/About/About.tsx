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
      const elements = containerRef.current.querySelectorAll('h1, li');
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <h1 className={`${styles.title} ${styles.hiddenHeaderX}`}>About Me</h1>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li className={styles.hiddenItemX}>i like to boulder</li>
          <li className={`${styles.greenText} ${styles.hiddenItemX}`}>
            i'm a goated programmer
          </li>
          {/* <li className={styles.hiddenItemX}>
            i have 500+ connections on{' '}
            <a
              className={styles.blueText}
              href="https://www.linkedin.com/in/jmnglmn/"
              target="_blank"
            >
              linkedin
            </a>{' '}
          </li> */}
          <li className={styles.hiddenItemX}>
            i peaked #~5000 on osu! but i'm washed now
          </li>
          <li className={styles.hiddenItemX}>
            my favourite colours are #05472A and #002366
          </li>
          <li className={styles.hiddenItemX}>
            i used to play alto sax and clarinet in high school
          </li>
          <li className={styles.hiddenItemX}>
            i consistently post inconsistently on{' '}
            <a href="https://www.tiktok.com/@jasutiin" target="_blank">
              <span className={styles.redText}>tik</span>
              <span className={styles.blueText}>tok</span>
            </a>{' '}
            and{' '}
            <a href="https://www.youtube.com/@jasutiin." target="_blank">
              <span className={styles.redText}>youtube</span>
            </a>
          </li>
          {/* <li className={styles.hiddenItemX}>
            my{' '}
            <a
              className={styles.orangeText}
              href="https://github.com/jasutiin"
              target="_blank"
            >
              github
            </a>{' '}
            features more projects that i haven't shown here
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default About;
