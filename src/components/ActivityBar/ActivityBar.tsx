import styles from './ActivityBar.module.scss';
import { NavLink } from 'react-router-dom';

import { VscFiles } from 'react-icons/vsc';
import { VscCode } from 'react-icons/vsc';
import { VscAccount } from 'react-icons/vsc';

const iconSize: number = 30;

function ActivityBar() {
  return (
    <div className={styles.container}>
      <NavLink to="/" className={styles.icon}>
        <VscFiles size={iconSize} />
      </NavLink>
      <NavLink to="/projects" className={styles.icon}>
        <VscCode size={iconSize} />
      </NavLink>
      <div className={styles.bottomIcons}>
        <NavLink to="/about" className={styles.icon}>
          <VscAccount size={iconSize} />
        </NavLink>
      </div>
    </div>
  );
}

export default ActivityBar;
