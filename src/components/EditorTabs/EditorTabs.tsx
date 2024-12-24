import styles from './EditorTabs.module.scss';
import { NavLink } from 'react-router-dom';

function EditorTabs() {
  return (
    <div className={styles.container}>
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

export default EditorTabs;
