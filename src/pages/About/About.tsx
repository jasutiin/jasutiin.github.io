import styles from './About.module.scss';

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li>i like to boulder</li>
          <li className={styles.greenText}>i'm a goated programmer</li>
          <li>
            i have 500+ connections on{' '}
            <a
              className={styles.blueText}
              href="https://www.linkedin.com/in/jmnglmn/"
              target="_blank"
            >
              linkedin
            </a>{' '}
          </li>
          <li>i peaked #~5000 on osu! but i'm washed now</li>
          <li>my favourite colours are #05472A and #002366</li>
          <li>i used to play alto sax and clarinet in high school</li>
          <li>
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
          <li>
            my{' '}
            <a
              className={styles.orangeText}
              href="https://github.com/jasutiin"
              target="_blank"
            >
              github
            </a>{' '}
            features more projects that i haven't shown here
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
