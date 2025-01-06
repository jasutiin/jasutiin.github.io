import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      const items = containerRef.current.querySelectorAll('a');

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
          <Link
            to="/projects"
            className={`${styles.link} ${styles.hiddenSlowY}`}
          >
            See my projects!
          </Link>
          <Link
            to="/about"
            className={`${styles.link} ${styles.second} ${styles.hiddenSlowY}`}
          >
            Learn more about me!
          </Link>
        </div>
        <div>
          <Link
            to="https://github.com/jasutiin"
            target="blank"
            className={`${styles.link} ${styles.noUnderline} ${styles.third} ${styles.hiddenSlowY}`}
          >
            <FaGithub size={40} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/jmnglmn/"
            target="blank"
            className={`${styles.link} ${styles.noUnderline} ${styles.fourth} ${styles.hiddenSlowY}`}
          >
            <FaLinkedin size={40} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
