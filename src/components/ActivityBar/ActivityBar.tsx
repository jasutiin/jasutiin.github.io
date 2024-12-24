import styles from './ActivityBar.module.scss';
import { NavLink } from 'react-router-dom';

import { VscFiles } from 'react-icons/vsc';
import { VscCode } from 'react-icons/vsc';
import { VscAccount } from 'react-icons/vsc';

const iconSize: number = 30;

function ActivityBar() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <NavLink to="/">
          <VscFiles size={iconSize} />
        </NavLink>
      </div>
      <div className={styles.icon}>
        <NavLink to="/projects">
          <VscCode size={iconSize} />
        </NavLink>
      </div>
      <div className={styles.bottomIcons}>
        <div className={styles.icon}>
          <NavLink to="/about">
            <VscAccount size={iconSize} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ActivityBar;
