import styles from './MenuBar.module.scss';
import { VscChromeClose } from 'react-icons/vsc';
import { VscChromeMinimize } from 'react-icons/vsc';
import { VscChromeMaximize } from 'react-icons/vsc';
import { VscVscode } from 'react-icons/vsc';

const iconSize = 20;

function MenuBar() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <VscVscode className={styles.item} size={iconSize} />
        <div className={styles.item}>File</div>
        <div className={styles.item}>Edit</div>
        <div className={styles.item}>Selection</div>
        <div className={styles.item}>View</div>
        <div className={styles.item}>Go</div>
        <div className={styles.item}>Terminal</div>
        <div className={styles.item}>Help</div>
      </div>
      <div className={styles.name}>Justine Mangaliman - Visual Studio Code</div>
      <div className={styles.right}>
        <div className={styles.icons}>
          <VscChromeMinimize className={styles.icon} size={iconSize} />
        </div>
        <div className={styles.icons}>
          <VscChromeMaximize className={styles.icon} size={iconSize} />
        </div>
        <div className={styles.icons}>
          <VscChromeClose className={styles.icon} size={iconSize} />
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
