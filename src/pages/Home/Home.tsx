import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>
        Justine <br />
        Mangaliman
      </h1>
      <p>Full Stack Web Developer</p>
    </div>
  );
}

export default Home;
