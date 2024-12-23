import ActivityBar from '../ActivityBar/ActivityBar';
import Explorer from '../Explorer/Explorer';
import styles from './MainLayout.module.scss';

function MainLayout() {
  return (
    <div className={styles.container}>
      <ActivityBar />
      <Explorer />
    </div>
  );
}

export default MainLayout;
