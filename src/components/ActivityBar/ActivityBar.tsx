import styles from './ActivityBar.module.scss';

import { VscFiles } from 'react-icons/vsc';
import { VscCode } from 'react-icons/vsc';

const iconSize: number = 30;

function ActivityBar() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <VscFiles size={iconSize} />
      </div>
      <div className={styles.icon}>
        <VscCode size={iconSize} />
      </div>
      <div className={styles.bottomIcons}>
        <div className={styles.icon}>
          <VscCode size={iconSize} />
        </div>
      </div>
    </div>
  );
}

export default ActivityBar;
