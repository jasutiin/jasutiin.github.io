import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.name}>
          Justine <br />
          Mangaliman
        </h1>
        <p>Student @ UCalgary</p>
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
