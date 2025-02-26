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
          <div className={styles.title}>
            <h1>Graphic Designs / <span>Sparkly</span></h1>
          </div>
          <div>
            <Image 
                src="/images/sparkly/sparkly-thumbnail.png" 
                width={1500} 
                height={1039} 
                alt="Mechanic Illustration Big"
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
              <div className={styles.imageWrapper}>
                <div className={styles.dielineContainer}>
                  <div className={styles.dieline}>
                    <div className={styles.characterImg}>
                      <img
                      src="/images/sparkly/tomato1.png" 
                      alt="Tomato Character"
                      />
                    </div>
                    <div className={styles.dielineImg}>
                      <img
                      src="/images/sparkly/tomato2.png"  
                      alt="Tomato Dieline"
                      />
                    </div>
                  </div>
                  <div>
                    <div className={styles.dieline}>
                      <div className={styles.characterImg}>
                        <img 
                        src="/images/sparkly/pine1.png" 
                        alt="Pineapple Character"
                        />
                      </div>
                      <div className={styles.dielineImg}>
                        <img 
                        src="/images/sparkly/pine2.png" 
                        alt="Pineapple Dieline"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.dieline}>
                      <div className={styles.characterImg}>
                        <img 
                        src="/images/sparkly/steen1.png" 
                        alt="Pineapple Character"
                        />
                      </div>
                      <div className={styles.dielineImg}>
                        <img 
                        src="/images/sparkly/steen2.png" 
                        alt="Pineapple Dieline"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.mockupContainer}>
                  <div className={styles.mockup}>
                      <div className={styles.mockupImg}>
                        <img 
                          src="/images/sparkly/mockup2.png" 
                          alt="Tomato Character"
                          
                        />
                      </div>
                      <div className={styles.mockupImg}>
                        <img 
                          src="/images/sparkly/tomato.png" 
                          alt="Tomato Character"
                        />
                      </div>
                  </div>
                    <div className={styles.mockup}>
                      <div className={styles.mockupImg}>
                          <img 
                            src="/images/sparkly/mockup3.png" 
                            alt="Tomato Character"
                          />
                      </div>
                        <div className={styles.mockupImg}>
                          <img 
                            src="/images/sparkly/mockup4.png" 
                            alt="Tomato Character"
                          />
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
}