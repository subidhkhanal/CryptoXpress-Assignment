import { Card } from 'antd';
import styles from '../../styles/Newsletter.module.css'
import { Input,Button} from 'antd';

      
   const Newsletter= () => {
    return(
        <div className={styles.container}>
            <div className={styles.cardItem}>
           <Card size="small" title="Subscribe to Mailer" extra={<img src="https://ocean.go2andaman.com/wp-content/uploads/2020/05/mailer.svg"/>} className={styles.cardDetails}>
            <p>Stay updated with all the excitement that Andamans has to offer</p>
            <div className={styles.subscribe}>
            <Input placeholder="Email"/>
            <Button className={styles.buttons}>Subscribe</Button>
            </div>
            </Card> 
            </div>
            <div className={styles.cardItem}>
            <Card size="small" title="Collaborate with us for Blog" extra={<img src="https://ocean.go2andaman.com/wp-content/uploads/2020/10/blog.png"/>} className={styles.cardDetails}>
            <p>If you have a flair for writing, write for us and get featured.</p>
            <div className={styles.buttonDiv}>
            <Button className={styles.buttons}>FIND OUT HOW</Button>
            </div>
            </Card> 
            </div>
            <div className={styles.cardItem}>
            <Card size="small" title="Be your own tour guide." extra={<img src="https://ocean.go2andaman.com/wp-content/uploads/2020/05/tour.svg" />} className={styles.cardDetails}>
            <p>Get lost or never. You decide. Download our handy tour guides to plan your trip.</p>
            <div className={styles.buttonDiv}>
            <Button className={styles.buttons}>DOWNLOAD</Button>
            </div>
            </Card> 
            </div>
        </div>
    )
}
export default Newsletter