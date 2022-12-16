import styles from '../styles/Footer.module.css'
import { Col,  Row } from 'antd';
import { Typography,Divider} from 'antd';

const { Title,Paragraph } = Typography;
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <Row justify="space-evenly">
            <Col span={24}
            lg={{
              span: 6
            }}
            > 
                <div>
                  <a href="https://www.go2andaman.com">
                    <img src="https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg"/>
                  </a>
                </div>
                <div>
                  <p> We’re a small crew of locals and Andaman-lovers helping you make the most of your trip to the Andamans.</p>
                  <p>You can build your holiday from the ground-up, exactly how you like. We’ve personally verified each experience, so you know that they’re tried, tested and true!</p><p><a href="https://www.go2andaman.com/about-us/">Find Out How </a></p>
                </div>
            </Col>
            <Col span={24}
            lg={{
              span: 6,
              offset: 2,
            }}>
              <div>
                <Paragraph strong>
                  <Title level={5}>GO2ANDAMAN.COM</Title>
                </Paragraph>
                <ul className={styles.lists}>
                  <li className={styles.list}><a>About Us</a></li>
                  <li className={styles.list}><a>Jobs at Go2Andaman</a></li>
                  <li className={styles.list}><a>Travel Blog</a></li>
                  <li className={styles.list}><a>Influencers &amp; Brands</a></li>
                  <li className={styles.list}><a>GO2ANDAMAN Reviews</a></li>
                </ul>
              </div>
            </Col>
            <Col span={24}
            lg={{
              span: 6
            }}>
              <div>
              <Paragraph strong>
                  <Title level={5}>FOR TRAVELLERS</Title>
                </Paragraph>
                <ul className={styles.lists}>
                  <li className={styles.list}><a>Contact Us</a></li>
                  <li className={styles.list}><a>Refunds &amp; Cancellation</a></li>
                  <li className={styles.list}><a>Terms of Service</a></li>
                  <li className={styles.list}><a>Content Disclaimer</a></li>
                  <li className={styles.list}><a>Privacy Policy</a></li>
                </ul>
              </div>
            </Col>
            <Col
            lg={{
              span:1
            }}
            xl={{
              span: 3
            }} 
            className={styles.image}>
            <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/startupindia-01.svg" width="200"/>
            </Col>
        </Row>
          <Divider />
        <Row>
        <Col span={0}
            md={{
              span: 14,
            }}
            lg={{
              span: 12
            }}
            > 
              WEBPORT MEDIA PVT LTD | CIN No: U63040AN2015PTC000278
            </Col>
            <Col span={24} offset={7}
            md={{
              span:8,
              offset: 1
            }}
            lg={{
              span: 6,
              offset: 6
            }}
          >
             <a className={styles.icons}>
              <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/07/instagram.png" width="20"/>
            </a>
            <a className={styles.icons}>
              <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/07/facebook.png" width="10" />
            </a> 
            <a className={styles.icons}>
              <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/07/pinterest.png" width="20"/>
            </a>
            <a className={styles.icons}>
              <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/07/linkedin.png" width="20"/>
            </a>
            <a className={styles.icons}>
              <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/07/twitter.png" width="20"/>
            </a>
            </Col>
        </Row>
      </div>
    </div>
  );
};
export default Footer;
