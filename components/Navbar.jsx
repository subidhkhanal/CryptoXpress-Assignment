import { Col,  Row } from 'antd';
import {SearchOutlined,AlignLeftOutlined} from '@ant-design/icons';
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
      <div className={styles.container}>
    <div className={styles.navbarDesktop}>
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

    <div className={styles.navbarMobile}>
    <Row justify="space-evenly" className={styles.content}>
            <Col span={9} className={styles.item}> 
            <AlignLeftOutlined style={{height:"30px", fontSize:"30px"}}/></Col>
            <Col span={12}> <img src="https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg" /></Col>
            <Col span={3}>
              <img style={{width:"60px"}}src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/CTA-Buttons-Final-Draft-02.png"/>
            </Col>
        </Row>
    </div>
    </div>
  );
};

export default Navbar;

