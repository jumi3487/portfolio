import { useRouter } from "next/router";
import projects from "../../data/projects";
import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/Beep.module.css";
import Footer from "../../components/Footer";
import Image from 'next/image';

export default function Beep() {

  return (
    <>
      <Head>
        <title>Beep</title>
      </Head>

      <div className={styles.body}>
        {/* Navbar */}
        <Header />
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Projects / <span>Beep</span></h1>
          </div>
          <div>
            <Image 
                src="/images/beep/1.png" 
                width={1477} 
                height={1570} 
                alt="Beep Thumbnail"
                className={styles.image}
              />
          </div>
          {/** Overview of the projects**/}
          <div className={styles.infoContainer}>
            <div className={styles.overview}>
              {/* Left Column */}
              <div className={styles.leftColumn}>
                <div className={styles.infoRow}>
                  <p className={styles.label}>TIMELINE</p>
                  <p className={styles.value}>October 2023</p>
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
                  <strong>“Beep”</strong> is a <strong>crime heat map app</strong> designed to improve public safety, 
                  particularly for women, by <strong>providing real-time crime data and safe route suggestions</strong>. 
                  Powered by live data from the <strong>Vancouver Police Department</strong>, 
                  it delivers <strong>up-to-date crime heat maps and AI-driven navigation</strong>. 
                  Key features include an <strong>SOS button</strong> with a loud alarm, 
                  <strong>emergency contact integration</strong>, and the <strong>Safezone feature (Snap)</strong>, which highlights well-lit, secure locations. 
                  By analyzing crime trends with AI, <strong>Beep</strong> helps users <strong>make informed and safer travel decisions</strong>.
                </p>
              </div>
            </div>
          </div>
          {/** Overview of the projects**/}
          <div>
            <div className={styles.topCard}>
              {/** Problem Statement**/}
              <div className={styles.problemCard}>
                <div className={styles.cardContentContainer}>
                  <Image 
                    src="/images/beep/beep-logo-card.svg" 
                    width={26.2} 
                    height={54.5} 
                    alt="Beep Logo Small"
                    className={styles.beeplogo}
                  />
                  <div className={styles.cardContent}>
                    <h2>Problem Statement</h2>
                    <p>46% of women feel unsafe walking alone at night, yet traditional navigation apps prioritize speed over safety, 
                      lacking crime data. Without real-time insights, many rely on instinct, increasing vulnerability in high-risk areas.</p>
                  </div>
                </div>
                <svg className={styles.svg} width="490" height="555" viewBox="0 0 451 516" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M487.078 510.29C513.142 479.059 532.789 436.354 532.458 395.124C531.938 333.108 459.549 263.723 396.697 300.119C365.247 318.268 377.504 374.468 416.637 350.192C446.917 331.402 448.747 248.562 412.487 201.692C383.528 164.147 332.527 151.2 287.257 150.555C247.505 149.983 179.121 154.564 163.228 199.682C154.42 224.682 173.538 253.184 198.567 262.15C223.597 271.115 251.549 264.835 275.8 254.283C319.853 235.018 357.448 201.491 381.585 159.981C393.752 139.055 402.703 115.327 401.79 91.1137C401.381 79.472 398.336 67.4271 390.399 58.7835C375.935 43.1166 351.172 44.276 330.26 48.0449C287.8 55.7754 246.545 69.6248 203.892 76.4741C153.764 84.4633 99.6123 81.1368 56.764 50.9627C45.7472 43.2344 16.4508 22.4629 9.6055 -11.5095C-6.63786 -92.9642 94.971 -177.504 164.512 -194.991C191.049 -201.669 221.856 -198.253 241.829 -179.333C249.38 -172.207 255.408 -161.763 253.086 -151.698C251.406 -144.028 245.188 -138.138 238.584 -134.011C209.576 -116.096 169.802 -126.791 144.516 -149.794C113.482 -178.007 93.1892 -224.12 80.2535 -263.5" stroke="#651FD7" stroke-opacity="0.3" stroke-width="15" stroke-linejoin="round"/>
                </svg>
              </div>
              {/** Problem Statement**/}

              {/** Solution**/}
              <div className={styles.solutionCard}>
                <div className={styles.cardContentContainer}>
                  <Image 
                      src="/images/beep/beep-logo-card.svg" 
                      width={26.2} 
                      height={54.5} 
                      alt="Beep Logo Small"
                      className={styles.beeplogo}
                    />
                    <div className={styles.cardContent}>
                      <h2>Solution</h2>
                      <p>Beep enhances safety with real-time crime heat maps and AI-driven route recommendations, 
                        using live data from the Vancouver Police Department. It highlights high-risk areas, 
                        offers an SOS alarm, emergency contact integration, and the Snap feature for secure locations, 
                        empowering users to navigate safely, day or night.
                      </p>
                  </div>
                  <svg className={styles.solutionSVG} width="879" height="685" viewBox="0 0 819 625" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9163 2.52654C4.49074 47.7268 4.27252 101.897 24.3043 144.983C54.4588 209.779 163.51 247.991 212.054 179.811C236.376 145.76 196.688 92.6666 167.234 136.812C144.446 170.976 182.078 258.736 242.486 290.583C290.785 316.135 350.458 305.365 398.247 284.428C440.213 266.048 509.75 228.595 504.878 173.685C502.18 143.259 468.521 122.493 437.988 125.04C407.455 127.586 381.137 147.518 360.74 170.164C323.733 211.402 300.309 264.516 294.811 319.577C292.041 347.334 293.982 376.495 306.5 401.454C312.487 413.469 321.431 424.649 333.883 429.925C356.533 439.451 381.952 426.412 402.086 412.475C442.929 384.095 479.586 349.873 521.052 322.325C569.814 290.012 628.198 267.647 687.545 278.838C702.79 281.684 743.434 289.482 766.833 321.846C822.759 399.523 756.551 536.703 691.962 588.246C667.318 607.919 633.376 619.045 603.394 608.737C592.072 604.868 580.763 596.792 578.393 585.128C576.493 576.28 580.203 567.134 585.159 559.652C607.03 527.013 653.853 519.241 691.356 531.295C737.376 546.068 780.676 584.746 813.045 619.872" stroke="#651FD7" stroke-opacity="0.3" stroke-width="15" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              {/** Solution**/}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
