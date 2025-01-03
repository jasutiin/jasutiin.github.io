import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(containerRef.current);
            entry.target.classList.add(styles.animateSide);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('a, h1, p, li');
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.content}>
        <h1 className={styles.name}>
          Justine <br />
          Mangaliman
        </h1>
        <p>BSc CS @ UCalgary</p>
        <Link to="/projects" className={styles.link}>
          See my projects!
        </Link>
        <Link to="/about" className={styles.link}>
          Learn more about me!
        </Link>
      </div>
    </div>
  );
}

export default Home;
