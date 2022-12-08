import { Col,  Row } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import styles from "../styles/Navbar.module.css"
import { Breadcrumb } from 'antd';

const Navbar = () => {
    return (
    <div className={styles.testing}>
         <Row justify="space-between" className={styles.content}>
            <Col span={13}> <img src="https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg" /></Col>
            <Col span={2}className={styles.item}> Plan You Trip</Col>
            <Col span={2} className={styles.item}>Book Tours</Col>
            <Col span={2} className={styles.item}>Book Ferry</Col>
            <Col span={2} className={styles.item}>Travel Blog</Col>
            <Col span={2} className={styles.item}>Contact Us</Col>
            <SearchOutlined />  
        </Row>
    </div>
  );
};

export default Navbar;

