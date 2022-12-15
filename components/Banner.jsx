import { Breadcrumb } from 'antd';
import styles from "../styles/Banner.module.css"

const Banner = () => {
    return (
        <div>
            <div className={styles.containerOne}>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="">Andaman Travel Guide</Breadcrumb.Item>
                    <Breadcrumb.Item className={styles.item}>testing</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className={styles.containerTwo}>
                    <img className={styles.bannerImage} src="https://www.go2andaman.com/wp-content/uploads/2021/05/Havelock-Banner-Go2andaman.jpeg" />
                <div className={styles.textOnImage}>
                    <h1 className={styles.heading}>Havelock Island</h1>
                    <h2 className={styles.details}>Travel Guide - Top Things to Do &amp; See, Hotel &amp; Resorts, Restaurants &amp; Cafe and more </h2>
                    </div>
            </div>
      </div>
    );
  };
  
  export default Banner;
  