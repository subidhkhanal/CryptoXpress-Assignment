import { MobxContext } from "../../pages/_app";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import TableOfContentItems from "./TableOfContentItems";
import styles from "../../styles/TableofContent.module.css"
import {Card} from 'antd'

const TableofContent = () => {
    const {filteredBooks} = useContext(MobxContext);

    return (
    <div className={styles.container}>
           <span className={styles.title}>Table of content</span>  
           <div>
           <Card>  
        {filteredBooks.map((book,index) => (
          <TableOfContentItems key={index} book={book} />
        ))}
        </Card>
        </div>
    </div>
  );
};
export default observer(TableofContent);
