import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/Sparkly.module.css";
import Image from 'next/image';
import Footer from "../../components/Footer";

export default function FrenchFries(){
    return(
        <>
      <Head>
        <title> How to Make French Fries ? </title>
      </Head>
      {/* Navbar */}
      <Header />
      <div className={styles.body}>
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Motion Graphics / <span>How To Make French Fries ?</span></h1>
            </div>
            <div>
                <img 
                    src="/images/french-fries-thumbnail.png" 
                    alt="French Fries Thumbnail"
                    className={styles.image}
                />
            </div>
            <div className={styles.overviewContainer}>
                {/* ✅ Wrapped Left & Right sections inside `infoContainer` */}
                <div className={styles.infoContainer}>
                <div className={styles.overview}>
                    {/* Left Column */}
                    <div className={styles.leftColumn}>
                    <div className={styles.infoRow}>
                        <p className={styles.label}>TIMELINE</p>
                        <p className={styles.value}>2 Weeks</p>
                    </div>
                    <div className={styles.infoRow}>
                        <p className={styles.label}>ROLE</p>
                        <p className={styles.value}>Graphic Designer / Video Editor</p>
                    </div>
                    <div className={styles.infoRow}>
                        <p className={styles.label}>TOOLS</p>
                        <p className={styles.value}>Adobe Illustrator, Adobe After Effects</p>
                    </div>
                    </div>

                    {/* Right Column */}
                    <div className={styles.rightColumn}>
                        <h3 className={styles.overviewTitle}>Overview</h3>
                        <p className={styles.overviewText}>
                            <strong>“How To Make French Fries ?”</strong> is a motion graphics project project that uses
                            <strong>video editing, script planning, and graphic design </strong> to visually explain the step-by-step process of making homemade French fries. It combines <strong>animated visuals and smooth transitions</strong>
                             to showcase key steps like cutting, soaking, frying, and seasoning, making the tutorial engaging and easy to follow.
                        </p>
                    </div>

              </div>
            </div>
            <div>
                <video width="1000" height="800" controls>
                    <source src="/videos/french-fries.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
          </div>
        </div>
        <Footer />
      </div>
        </>
    )
}