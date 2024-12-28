import { NavLink } from 'react-router-dom';
import { VscChevronDown } from 'react-icons/vsc';
import styles from './Explorer.module.scss';

function Explorer() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <VscChevronDown size={20} />
        <h3>Portfolio</h3>
      </div>
      <div className={styles.items}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.item)}
        >
          home.tsx
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : styles.item)}
        >
          about.html
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? styles.active : styles.item)}
        >
          projects.json
        </NavLink>
      </div>
    </div>
  );
}

export default Explorer;
