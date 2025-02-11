import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/Illustration.module.css";
import Image from 'next/image';
import Footer from "../../components/Footer";

export default function Illustration() {
  return (
    <>
      <Head>
        <title> Mechanic Illustration</title>
      </Head>

      <div className={styles.body}>
        {/* Navbar */}
        <Header />
        <div className={styles.container}>
          <h1>Graphic Designs / <span>Mechanic Illustrations</span></h1>

          <div className={styles.overviewContainer}>
            <Image 
              src="/images/mechanic-illustration/mechanic-illustration.png" 
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
                    <p className={styles.value}>2 Weeks</p>
                  </div>
                  <div className={styles.infoRow}>
                    <p className={styles.label}>ROLE</p>
                    <p className={styles.value}>Graphic Designer</p>
                  </div>
                  <div className={styles.infoRow}>
                    <p className={styles.label}>TOOLS</p>
                    <p className={styles.value}>Adobe Illustrator</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className={styles.rightColumn}>
                  <h3 className={styles.overviewTitle}>Overview</h3>
                  <p className={styles.overviewText}>
                    <strong>“Mechanic Illustration”</strong> is an exercise using&nbsp;
                    <strong>Adobe Illustrator</strong>&nbsp;to recreate a real mechanical machine through digital illustration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Wrapped details images in a flex container */}
        <div className={styles.detailsContainer}>
        <Image 
              src="/images/mechanic-illustration/real-object.png" 
              width={481} 
              height={481} 
              alt="Illustration Detail 1"
              className={styles.image}
            />
            <Image 
              src="/images/mechanic-illustration/mechanic-illustration.png" 
              width={695} 
              height={481} 
              alt="Illustration Detail 2"
              className={styles.image}
            />
        </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
