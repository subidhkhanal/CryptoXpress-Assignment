import styles from '../../styles/Wecare.module.css'
import Newsletter from './Newsletter'

const Wecare = () => {
    return (
	<div className={styles.container}>
     <div className={styles.title}>
        <div className={styles.titleTwo}>We care.</div>
      </div>
      <div className={styles.information}>
        <div className={styles.informationDetails}>
          <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/conversation.svg"/> 
          <h4>Customer Happiness</h4>
          <span>We’re delighted to help you. Anything you need, we’re available.</span>
        </div>
        <div className={styles.informationDetails}>
          <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/payment.svg"/> 
          <h4>Secure Payments</h4>
          <span>We take your security seriously. Use our data-protected, user-friendly payment gateway to process payments safely.</span>
        </div>
        <div className={styles.informationDetails}>
          <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/Page-1.svg"/> 
          <h4>No Hidden Costs</h4>
          <span>What you see is what you get.</span>
        </div>
        <div className={styles.informationDetails}  >
          <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/reliability.svg"/> 
          <h4>Fast Confirmations</h4>
          <span>Be confident that your trip is set. Get ready for the experience.</span>
        </div>
      </div>
        </div>
    )
}
export default Wecare