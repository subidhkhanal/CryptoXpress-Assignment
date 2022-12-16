import styles from '../../styles/Wecare.module.css'
 import { Col,  Row } from 'antd';


const Wecare = () => {
    return (
	<div className={styles.container}>
    <div className={styles.outsideContainer}>
      <div className={styles.insideContainer}>
     <div className={styles.title}>
        <div className={styles.titleTwo}>We Care.</div>
      </div>
      <Row className={styles.information}>
        <Col className={styles.informationDetails}>
          <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/conversation.svg"/> 
          <h4>Customer Happiness</h4>
          <span>We’re delighted to help you. Anything you need, we’re available.</span>
        </Col>
        <Col className={styles.informationDetails}>
          <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/payment.svg"/> 
          <h4>Secure Payments</h4>
          <span>We take your security seriously. Use our data-protected, user-friendly payment gateway to process payments safely.</span>
        </Col>
        <Col className={styles.informationDetails}>
          <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/Page-1.svg"/> 
          <h4>No Hidden Costs</h4>
          <span>What you see is what you get.</span>
        </Col>
        <Col className={styles.informationDetails}  >
          <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/reliability.svg"/> 
          <h4>Fast Confirmations</h4>
          <span>Be confident that your trip is set. Get ready for the experience.</span>
        </Col>
      </Row>
      </div>
      </div>
        </div>
    )
}
export default Wecare