import { useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import HeadArea from "../components/HeadArea";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import MotionGraphics from "../components/MotionGraphics";
import GraphicDesigns from "../components/GraphicDesigns";
import Gallery from "../components/Gallery";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let currentValue = 0;

    function updateCounter() {
      if (currentValue >= 100) {
        setTimeout(() => {

          const timeline = gsap.timeline();

          timeline.to(".loadingScreen", {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          })
  
          // ✅ Step 2: Then move text up AFTER the background fades out
          .to(".loadingScreen h1", {
            y: -300,
            duration: 1.2,
            ease: "power4.inOut",
            onComplete: () => {
              setLoading(false); // Hide loader after animation
            },
          }, "-=1.2");

        }, 500);
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;
      if (currentValue > 100) {
        currentValue = 100;
      }

      setCounter(currentValue);
      let delay = Math.floor(Math.random() * 150) + 50; // Random speed
      setTimeout(updateCounter, delay);
    }

    updateCounter();
  }, []);

  return (
    <>
      <HeadArea />
      
      {/* Loading Screen */}
      {loading && (
        <div className={`${styles.loadingScreen} loadingScreen`}>
          <h1 className={styles.counter}>{counter}%</h1>
          <div className={styles.loadingBar}>
            <div
              className={styles.loadingProgress}
              style={{ width: `${counter}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Main Content (Hidden until loading is complete) */}
      {!loading && (
        <main className={`${styles.main} main`}>
          <Header />

          <div className={`${styles.pageContainer} pageContainer`}>
            {/* Sections */}
            <Introduction/>
            <button className={styles.exploreButton}>
                <div className={styles.exploreButtonCircle}>
                  <svg
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Icon/Arrow/Down">
                      <path
                        id="Vector"
                        d="M14.5 10.0769L8.25 17L2 10.0769M8.25 16.0385L8.25 2"
                        stroke="#E7ECEF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <span>Explore my works</span>
              </button>
            <div className={styles.divide}></div>
            <Projects />
            <div className={styles.divide}></div>
            <GraphicDesigns />
            <div className={styles.divide}></div>
            <MotionGraphics />
            <div className={styles.divide}></div>

            <div className={styles.gallery}>
              <button className={styles.exploreButton}>
                <div className={styles.exploreButtonCircle}>
                  <svg
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Icon/Arrow/Down">
                      <path
                        id="Vector"
                        d="M14.5 10.0769L8.25 17L2 10.0769M8.25 16.0385L8.25 2"
                        stroke="#E7ECEF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <span>My visual feed</span>
              </button>
              <Gallery />
            </div>
          </div>

          <footer className={styles.footer}>
            <Footer />
          </footer>
        </main>
      )}
    </>
  );
}
