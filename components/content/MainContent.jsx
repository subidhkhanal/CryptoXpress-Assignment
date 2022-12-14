import TableofContent from "./TableofContent";
import Sidebar from '../Sidebar'
import styles from '../../styles/MainContent.module.css'
import Content from './Content'
import { observer } from "mobx-react-lite"
import { MobxContext } from "../../pages/_app";
import { useContext } from "react";
import {Card} from 'antd'


const MainContent = () => {
  const { fetchAndSetBooksOnClient} = useContext(MobxContext);


    return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.content}>
          <TableofContent />
          <Content />
        </div>
        <div className={styles.sidebar}>
        <Card style={{marginBottom:"50px"}}>
              {fetchAndSetBooksOnClient.map((book, index) => (
          <Sidebar key={index} book={book} />
        ))}
        </Card>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
