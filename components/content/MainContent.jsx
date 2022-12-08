import TableofContent from "./TableofContent";
import Sidebar from '../Sidebar'
import styles from '../../styles/MainContent.module.css'
import Content from './Content'

const MainContent = () => {
    return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.content}>
          <TableofContent />
          <Content />
        </div>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
export default MainContent;
