import styles from "./BeepCompetitive.module.css";

export default function BeepCompetitive(){
    return(
        <>
            <div className={styles.competitive}>
                {/* Left Section: Beep Logo */}
                <div className={styles.imageWrapper}>
                </div>

                {/* Right Section: Competitor Cards */}
                <div className={styles.content}>
                    <div className={styles.summary}>
                        <img className={styles.image} src="/images/beep/competitive1.png" alt="Competitive 1" />
                    </div>

                    <div className={styles.summary}>
                        <img className={styles.image} src="/images/beep/competitive2.png" alt="Competitive 2" />
                    </div>

                    <div className={styles.summary}>
                        <img className={styles.image} src="/images/beep/competitive3.png" alt="Competitive 3" />
                    </div>
                </div>
            </div>
        </>
    )
}
