import Newsletter from "./Newsletter"
import Wecare from "./Wecare"
import styles from '../../styles/Whychooseus.module.css'
import { Col,  Row } from 'antd';

const Whychooseus  = () => {
    return(
        <div className={styles.mainContainer}>
            <Wecare />
            <Newsletter />
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.titleTwo}>We Choose Us?</div>
                </div>
                    <Row className={styles.information}>
                        <Col className={styles.informationDetails}
                         span={24}
                         md={{
                             span: 8
                         }}
                        >
                            <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/handshake.svg"/> 
                            <h4>Local Expertise</h4>
                            <span>By the locals, for the world</span>
                        </Col>
                        <Col
                         span={24}
                         md={{
                             span: 8
                         }}
                        className={styles.informationDetails}>
                            <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/hotel-1.svg"/> 
                            <h4>The Choicest Experiences</h4>
                            <span>Only the best experiences make it to G2A</span>
                        </Col>
                        <Col
                         span={24}
                         md={{
                             span: 8
                         }}
                        className={styles.informationDetails}>
                            <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/sunset.svg"/> 
                            <h4>Tailor-make your own holiday</h4>
                            <span>Build your holiday your way</span>
                        </Col>
                    </Row>
            </div>
        </div>

    )
}

export default Whychooseus