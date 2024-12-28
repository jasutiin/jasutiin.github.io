import styles from './About.module.scss';

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li>i like to boulder</li>
          <li className={styles.emph}>i'm a goated programmer</li>
          <li>i peaked #~5000 on osu! but i'm washed now</li>
          <li>i study compsci at the university of calgary</li>
          <li>i used to play alto sax and clarinet in high school</li>
          <li>my favourite colours are forest green and navy blue</li>
          <li>
            i consistently post inconsistently on{' '}
            <a href="https://www.tiktok.com/@jasutiin" target="_blank">
              tiktok
            </a>{' '}
            and{' '}
            <a href="https://www.youtube.com/@jasutiin." target="_blank">
              youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
