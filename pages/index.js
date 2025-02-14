import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import HeadArea from "../components/HeadArea";
import Projects from "../components/Projects";
import MotionGraphics from "../components/MotionGraphics";
import GraphicDesigns from "../components/GraphicDesigns";
import Gallery from "@/components/Gallery";



export default function Home() {
  return (
    <>

      <HeadArea/>
      
      <main className={styles.main}>
        <Header />

        <div className={styles.pageContainer}>
          {/*Section One*/}
          <div className={styles.sectionOne}>
            <div className={styles.sectionOneHeader}>
              <h1>Hello! I am <span>Jumi</span>
                <br/>
                <span>Join my journey</span> as a 
                <br/>
                passionate <span>Digital Designer</span>
              </h1>
            </div>
            <button className={styles.exploreButton}>
              <div className={styles.exploreButtonCircle}>
                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Icon/Arrow/Down">
                <path id="Vector" d="M14.5 10.0769L8.25 17L2 10.0769M8.25 16.0385L8.25 2" stroke="#E7ECEF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
              </div>
              <span>
                Explore my works
              </span>
              </button>
            {/*Section One End*/}
          </div> 
          <div className={styles.divide}></div>
          {/*Section Two */}
            <Projects/>
          {/*Section One End*/}

          {/*Section Three*/}
          <div className={styles.sectionThree}>
            <GraphicDesigns/>
              {/*Section Three End*/}

          <div className={styles.divide}></div>
              
                {/*Section Four*/}
              <div className={styles.sectionFour}>
                <div>
                    <MotionGraphics/>
                </div>
                {/*Section Four*/}
              </div>  
              <div className={styles.divide}></div> 
              </div>
              <div className={styles.gallery}>
                <Gallery/>
              </div>
            </div>
      </main>
      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </>
  );
}
