import styles from './Explorer.module.scss';
import { VscChevronDown } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';

function Explorer() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <VscChevronDown size={20} />
        <h3>Portfolio</h3>
      </div>
      <div className={styles.item}>
        <NavLink to="/">home.tsx</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/about">about.html</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/projects">projects.json</NavLink>
      </div>
    </div>
  );
}

export default Explorer;
