import { Card } from 'antd';
import styles from '../../styles/Newsletter.module.css'
      
   const Newsletter= () => {
    return(
        <div className={styles.container}>
            <div className={styles.cardItem}>
           <Card size="small" title="Subscribe to Mailer" extra={<a href="#">More</a>} className={styles.cardDetails}>
            <p>Stay updated with all the excitement that Andamans has to offer</p>
            <div>
            <input type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email" aria-invalid="false" />
            <button type="submit" class="primary">Subscribe</button>
            </div>
            </Card> 
            </div>
            <div className={styles.cardItem}>
            <Card size="small" title="Collaborate with us for Blog/Content" extra={<a href="#">More</a>} className={styles.cardDetails}>
            <p>If you have a flair for writing, write for us and get featured.</p>
            <div>
            <input type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email" aria-invalid="false" />
            <button type="submit" class="primary">Subscribe</button>
            </div>
            </Card> 
            </div>
            <div className={styles.cardItem}>
            <Card size="small" title="Be your own tour guide." extra={<a href="#">More</a>} className={styles.cardDetails}>
            <p>Get lost or never. You decide. Download our handy tour guides to plan your trip.</p>
            <div>
            <input type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email" aria-invalid="false" />
            <button type="submit" class="primary">Subscribe</button>
            </div>
            </Card> 
            </div>
        </div>
    )
}
export default Newsletter