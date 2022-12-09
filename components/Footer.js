import styles from '../styles/Footer.module.css'
import { Col,  Row } from 'antd';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.partOne}>
        <Row justify="space-evenly" className={styles.content}>
            <Col
            xs={{
              span: 5,
              offset: 1,
            }}
            lg={{
              span: 6,
              offset: 2,
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
            <Col
            xs={{
              span: 5,
              offset: 1,
            }}
            lg={{
              span: 6,
              offset: 2,
            }}>
              <div>
                <h2>GO2ANDAMAN.COM</h2>
                <ul className={styles.list}>
                  <li><a href="https://www.go2andaman.com/about-us/">About Us</a></li>
                  <li><a href="https://go2andaman-jobs.super.site/">Jobs at Go2Andaman</a></li>
                  <li><a href="https://www.go2andaman.com/blog/">Travel Blog</a></li>
                  <li><a href="https://www.go2andaman.com/influencers/">Influencers &amp; Brands</a></li>
                  <li><a href="https://www.go2andaman.com/reviews/">GO2ANDAMAN Reviews</a></li>
                </ul>
              </div>
            </Col>
            <Col>
              <div>
                <h2>FOR TRAVELLERS</h2>
                <ul className={styles.list}>
                  <li><a href="https://www.go2andaman.com/contact-us/">Contact Us</a></li>
                  <li><a href="https://www.go2andaman.com/refund-and-cancellation-policy/">Refunds &amp; Cancellation</a></li>
                  <li><a href="https://www.go2andaman.com/terms-of-service/">Terms of Service</a></li>
                  <li><a href="https://www.go2andaman.com/content-disclaimer/">Content Disclaimer</a></li>
                  <li><a href="https://www.go2andaman.com/privacy-policy/">Privacy Policy</a></li>
                </ul>
              </div>
            </Col>
            <Col className={styles.image}>
            <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/startupindia-01.svg" width="200"/>
            </Col>
        </Row>
        </div>
      </div>
    </div>
  );
};
export default Footer;
