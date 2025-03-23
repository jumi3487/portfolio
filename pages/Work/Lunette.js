import { useRouter } from "next/router";
import projects from "../../data/projects";
import Head from "next/head";
import Header from "../../components/Header";
import styles from "@/styles/Lunette.module.css";
import Footer from "../../components/Footer";

export default function Lunette() {

  return (
    <>
      <Head>
        <title>Lunette</title>
      </Head>

      <div className={styles.body}>
        {/* Navbar */}
        <Header />
        <div className={styles.container}>
          <div className={styles.title}>
              <h1>Projects / <span>Lunette</span></h1>
          </div>
          <div>
              <img 
                  src="/images/lunette/thumbnail.png" 
                  alt="Lunete Thumbnail"
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
                          <p className={styles.value}>November – December 2023</p>
                      </div>
                      <div className={styles.infoRow}>
                          <p className={styles.label}>ROLE</p>
                          <p className={styles.value}>UX/UI Designer, Researcher</p>
                      </div>
                      <div className={styles.infoRow}>
                          <p className={styles.label}>TOOLS</p>
                          <p className={styles.value}>Figma</p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className={styles.rightColumn}>
                      <h3 className={styles.overviewTitle}>Overview</h3>
                      <p className={styles.overviewText}>
                        <strong>"Lunette"</strong> is 
                        a wireframes website design project that focuses
                          on delivering a sleek and cohesive digital experience 
                          for a premium eyewear brand. Using Figma, the project 
                          includes the creation of detailed wireframes and branding elements that reflect the brand’s 
                          sophisticated identity while emphasizing usability and accessibility.
                      </p>
                    </div>
              </div>
            </div>
          </div>
          <div>
                <video className={styles.video} controls>
                    <source className={styles.video} src="/videos/Mockup.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
