import Newsletter from "./Newsletter"
import Wecare from "./Wecare"
import styles from '../../styles/Whychooseus.module.css'

const Whychooseus  = () => {
    return(
        <div className={styles.mainContainer}>
            <Wecare />
            <Newsletter />
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.titleTwo}>We Choose Us?</div>
                </div>
                    <div className={styles.information}>
                        <div className={styles.informationDetails}>
                            <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/handshake.svg"/> 
                            <h4>Local Expertise</h4>
                            <span>By the locals, for the world</span>
                        </div>
                        <div className={styles.informationDetails}>
                            <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/hotel-1.svg"/> 
                            <h4>The Choicest Experiences</h4>
                            <span>Only the best experiences make it to G2A</span>
                        </div>
                        <div className={styles.informationDetails}>
                            <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/sunset.svg"/> 
                            <h4>Tailor-make your own holiday</h4>
                            <span>Build your holiday your way</span>
                        </div>
                    </div>
            </div>
        </div>

    )
}

export default Whychooseus