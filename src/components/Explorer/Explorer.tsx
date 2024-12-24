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
      <div className={styles.items}>
        <NavLink to="/" className={styles.item}>
          home.tsx
        </NavLink>
        <NavLink to="/about" className={styles.item}>
          about.html
        </NavLink>
        <NavLink to="/projects" className={styles.item}>
          projects.json
        </NavLink>
      </div>
    </div>
  );
}

export default Explorer;
