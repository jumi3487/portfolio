import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/Sparkly.module.css";
import Image from 'next/image';
import Footer from "../../components/Footer";

export default function Illustration() {
  return (
    <>
      <Head>
        <title> Sparkly </title>
      </Head>

      <div className={styles.body}>
        {/* Navbar */}
        <Header />
        <div className={styles.container}>
          <h1>Graphic Designs / <span>Sparkly</span></h1>

          <div className={styles.overviewContainer}>
            <Image 
              src="/images/sparkly/sparkly_big.png" 
              width={1500} 
              height={1039} 
              alt="Mechanic Illustration Big"
              className={styles.image}
            />

            {/* ✅ Wrapped Left & Right sections inside `infoContainer` */}
            <div className={styles.infoContainer}>
              <div className={styles.overview}>
                {/* Left Column */}
                <div className={styles.leftColumn}>
                  <div className={styles.infoRow}>
                    <p className={styles.label}>TIMELINE</p>
                    <p className={styles.value}>3 Weeks</p>
                  </div>
                  <div className={styles.infoRow}>
                    <p className={styles.label}>ROLE</p>
                    <p className={styles.value}>Graphic/ Product Designer</p>
                  </div>
                  <div className={styles.infoRow}>
                    <p className={styles.label}>TOOLS</p>
                    <p className={styles.value}>Adobe Illustrator, Adobe Photoshop</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className={styles.rightColumn}>
                  <h3 className={styles.overviewTitle}>Overview</h3>
                  <p className={styles.overviewText}>
                    <strong>“Sparkly”</strong> is the go-to sparkling beverage for adventurous flavor seekers who crave a fun, refreshing twist! Designed for young adults and trend-conscious consumers, Sparkly delivers fizzy excitement with bold, unique flavors—&nbsp;
                    <strong>Tomato, Pineapple, and Mangosteen</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Wrapped details images in a flex container */}
        <div className={styles.detailsContainer}>
          <div>
          <p> Real Object Image </p>
          <Image 
              src="/images/mechanic-illustration/real-object.png" 
              width={481} 
              height={481} 
              alt="Illustration Detail 1"
              className={styles.image}
            />
            </div>
            <div>
             <p> Illustration  </p>
            <Image 
              src="/images/mechanic-illustration/mechanic-illustration.png" 
              width={695} 
              height={481} 
              alt="Illustration Detail 2"
              className={styles.image}
            />
            </div>
        </div>
        </div>
        <Footer />
      </div>
    </>
  );
}