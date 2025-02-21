import { useRouter } from "next/router";
import projects from "../../data/projects";
import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/Beep.module.css";
import Footer from "../../components/Footer";
import Image from 'next/image';
import BeepCarousel from "../../components/BeepCarousel";
import { useRef } from "react";
import BeepStyleGuide from "../../components/BeepStyleGuide";
import BeepFrames from "../../components/BeepFrames";
import BeepFunctions from "@/components/BeepFunctions";

export default function Beep() {

    // Create refs for each section
    const personaRef = useRef(null);
    const sitemapRef = useRef(null);
    const styleGuideRef = useRef(null);
    const wireframesRef = useRef(null);

    // Function to handle smooth scrolling
    const scrollToSection = (ref) => {
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  };

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
                  <p className={styles.value}>September – December 2024</p>
                </div>
                <div className={styles.infoRow}>
                  <p className={styles.label}>ROLE</p>
                  <p className={styles.value}>Lead Digital Designer, UX/UI Designer, Frontend Developer and Researcher</p>
                </div>
                <div className={styles.infoRow}>
                  <p className={styles.label}>TOOLS</p>
                  <p className={styles.value}>Figma, Adobe Illustrator, Adobe Photoshop, Next.js</p>
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.rightColumn}>
                <div className={styles.rightColumnContent}>
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
                  <div className={styles.overviewBtn}>
                  <a className={styles.link} href="#">
                    <button className={styles.prototypeBtn}>Prototype
                      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.40298 1L12.3379 5.28571L7.40298 9.57143M11.6525 5.28571L1.64559 5.28571" stroke="#FFFEFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </a>
                  <a className={styles.link} href="https://beep-vlog.vercel.app/">
                    <button className={styles.prototypeBtn}>Visit Blog
                      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.40298 1L12.3379 5.28571L7.40298 9.57143M11.6525 5.28571L1.64559 5.28571" stroke="#FFFEFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </a>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
          {/** Overview of the projects**/}
          
          {/** Details of the projects**/}
          <div className={styles.projectDetails}>
            <div className={styles.projectDetailsCards}>
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
                  <svg className={styles.svg} width="540" height="782" viewBox="0 0 540 782" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M487.078 776.29C513.142 745.059 532.789 702.354 532.458 661.124C531.938 599.108 459.549 529.723 396.697 566.119C365.247 584.268 377.504 640.468 416.637 616.192C446.917 597.402 448.747 514.562 412.487 467.692C383.528 430.147 332.527 417.2 287.257 416.555C247.505 415.983 179.121 420.564 163.228 465.682C154.42 490.682 173.538 519.184 198.567 528.15C223.597 537.115 251.549 530.835 275.8 520.283C319.853 501.018 357.448 467.491 381.585 425.981C393.752 405.055 402.703 381.327 401.79 357.114C401.381 345.472 398.336 333.427 390.399 324.783C375.935 309.117 351.172 310.276 330.26 314.045C287.8 321.775 246.545 335.625 203.892 342.474C153.764 350.463 99.6123 347.137 56.764 316.963C45.7472 309.234 16.4508 288.463 9.6055 254.491C-6.63786 173.036 94.971 88.4959 164.512 71.0089C191.049 64.3311 221.856 67.7475 241.829 86.6671C249.38 93.7929 255.408 104.237 253.086 114.302C251.406 121.972 245.188 127.862 238.584 131.989C209.576 149.904 169.802 139.209 144.516 116.206C113.482 87.9929 93.1892 41.8795 80.2535 2.49975" stroke="#651FD7" stroke-opacity="0.3" stroke-width="15" stroke-linejoin="round"/>
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
              <div>
                  <Image 
                    src="/images/beep/beep-value.png" 
                    width={1481} 
                    height={770} 
                    alt="Beep Value"
                    className={styles.beepValueImg}
                  />
                </div>
            </div>
            {/**Beep - ProblemStatement, Solution and Value ------------------------------------END */}
          </div>
          {/** Details of the projects**/}

          {/**  DEVELOPMENT PROCESS **/}
          <div className={styles.developmentProcess}>
            <div className={styles.developProcessAgenda}>
              <div className={styles.developProcessCardContainer}>
                <div className={styles.developProcessCard}>
                  <Image 
                    src="/images/beep/beep-logo-card.svg" 
                    width={26.2} 
                    height={54.5} 
                    alt="Beep Logo Small"
                    className={styles.beeplogo}
                  />
                  <div className={styles.cardContent}>
                    <h2>Development Process</h2>
                  </div>
                </div>
                <svg className={styles.developSVG} width="430" height="421" viewBox="0 0 430 421" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M427.078 417.719C453.142 388.222 472.789 347.89 472.458 308.951C471.938 250.38 399.549 184.85 336.697 219.223C305.247 236.364 317.504 289.442 356.637 266.515C386.917 248.769 388.747 170.531 352.487 126.265C323.528 90.8054 272.527 78.5778 227.257 77.9683C187.505 77.4287 119.121 81.755 103.228 124.366C94.4198 147.978 113.538 174.896 138.567 183.364C163.597 191.831 191.549 185.9 215.8 175.934C259.853 157.739 297.448 126.075 321.585 86.8709C333.752 67.1076 342.703 44.6976 341.79 21.8297C341.381 10.8347 338.336 -0.541016 330.399 -8.70441C315.935 -23.5009 291.172 -22.4059 270.26 -18.8464C227.8 -11.5453 186.545 1.53459 143.892 8.0034C93.7639 15.5488 39.6123 12.4071 -3.23604 -16.0907C-14.2529 -23.3897 -43.5492 -43.0072 -50.3945 -75.0922C-66.6379 -152.022 34.9709 -231.865 104.512 -248.38C131.049 -254.687 161.856 -251.461 181.829 -233.592C189.38 -226.862 195.408 -216.998 193.086 -207.493C191.406 -200.248 185.188 -194.686 178.584 -190.788C149.576 -173.868 109.802 -183.969 84.5164 -205.694C53.4816 -232.34 33.1892 -275.891 20.2535 -313.084" stroke="#651FD7" stroke-opacity="0.3" stroke-width="10" stroke-linejoin="round"/>
                </svg>
              </div>
              <div className={styles.section}>
                <section className={styles.sectionContainer} onClick={() => scrollToSection(personaRef)}>
                  <div className={styles.sectionNumber}>
                    <h3>01</h3>
                    <h3>User Personas</h3>
                  </div>
                  <div className={styles.sectionParagraph}>
                    <p>Beep ensures a safer, more intuitive experience by tailoring features, design, and messaging to real user needs through user personas.</p>
                  </div>
                </section>
                <div className={styles.divide}></div>

                <section className={styles.sectionContainer} onClick={() => scrollToSection(sitemapRef)}>
                  <div className={styles.sectionNumber}>
                    <h3>02</h3>
                    <h3>Sitemap</h3>
                  </div>
                  <div className={styles.sectionParagraph}>
                    <p>Beep utilizes a sitemap to visualize key interactions and understand the user flow of the app interface for a seamless experience.</p>
                  </div>
                </section>
                <div className={styles.divide}></div>

                <section className={styles.sectionContainer} onClick={() => scrollToSection(styleGuideRef)}>
                  <div className={styles.sectionNumber}>
                    <h3>03</h3>
                    <h3>Style Guide</h3>
                  </div>
                  <div className={styles.sectionParagraph}>
                    <p>Beep utilizes a sitemap to visualize key interactions and understand the user flow of the app interface for a seamless experience.</p>
                  </div>
                </section>
                <div className={styles.divide}></div>

                <section className={styles.sectionContainer} onClick={() => scrollToSection(wireframesRef)}>
                  <div className={styles.sectionNumber}>
                    <h3>04</h3>
                    <h3>Wireframes</h3>
                  </div>
                  <div className={styles.sectionParagraph}>
                    <p>Beep ensures a safer, more intuitive experience by tailoring features, design, and messaging to real user needs through user personas.</p>
                  </div>
                </section>
                <div className={styles.divide}></div>
              </div>
            </div>
            <div className={styles.projectsDevelopContainer}>
              <div className={styles.persona} ref={personaRef}>
                <BeepCarousel/>
              </div>
              <div className={styles.sitemap} ref={sitemapRef}>
              <iframe className={styles.figma} width={1200} height={650} src="https://embed.figma.com/board/nAdsyGNJAdYsqGnXMTtiD7/Beep---Sitemap?node-id=0-1&embed-host=share" allowfullscreen></iframe>
              </div>
              <div className={styles.persona} ref={styleGuideRef}>
                <BeepStyleGuide/>
              </div>
              <div className={styles.persona} ref={wireframesRef}>
                <BeepFrames/>
              </div>
            </div>
          </div>
          {/**  DEVELOPMENT PROCESS **/}

          {/**********  MAIN FEATURES ***********/}
          < div className={styles.functions}>
              <BeepFunctions/>
          </div>
          {/**********  MAIN FEATURES ***********/}

          {/**********  LEARN MORE ***********/}
          <div className={styles.learnmore}>
            <div className={styles.linkContainer}>
              <h1>Learn more at</h1>
              <div className={styles.link}>
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 9.20892C3.61667 9.20892 2.43767 8.75983 1.463 7.86165C0.488334 6.96347 0.000667349 5.87774 6.82594e-07 4.60446C-0.000665984 3.33117 0.487001 2.24544 1.463 1.34726C2.439 0.449088 3.618 0 5 0H8C8.28333 0 8.521 0.0884057 8.713 0.265217C8.905 0.442028 9.00067 0.660586 9 0.920892C8.99933 1.1812 8.90333 1.40006 8.712 1.57749C8.52067 1.75491 8.28333 1.84301 8 1.84178H5C4.16667 1.84178 3.45833 2.11038 2.875 2.64756C2.29167 3.18475 2 3.83705 2 4.60446C2 5.37187 2.29167 6.02417 2.875 6.56135C3.45833 7.09854 4.16667 7.36713 5 7.36713H8C8.28333 7.36713 8.521 7.45554 8.713 7.63235C8.905 7.80916 9.00067 8.02772 9 8.28802C8.99933 8.54833 8.90333 8.76719 8.712 8.94462C8.52067 9.12204 8.28333 9.21014 8 9.20892H5ZM7 5.52535C6.71667 5.52535 6.47933 5.43694 6.288 5.26013C6.09667 5.08332 6.00067 4.86476 6 4.60446C5.99933 4.34415 6.09533 4.12559 6.288 3.94878C6.48067 3.77197 6.718 3.68357 7 3.68357H13C13.2833 3.68357 13.521 3.77197 13.713 3.94878C13.905 4.12559 14.0007 4.34415 14 4.60446C13.9993 4.86476 13.9033 5.08363 13.712 5.26105C13.5207 5.43848 13.2833 5.52658 13 5.52535H7ZM12 9.20892C11.7167 9.20892 11.4793 9.12051 11.288 8.9437C11.0967 8.76689 11.0007 8.54833 11 8.28802C10.9993 8.02772 11.0953 7.80916 11.288 7.63235C11.4807 7.45554 11.718 7.36713 12 7.36713H15C15.8333 7.36713 16.5417 7.09854 17.125 6.56135C17.7083 6.02417 18 5.37187 18 4.60446C18 3.83705 17.7083 3.18475 17.125 2.64756C16.5417 2.11038 15.8333 1.84178 15 1.84178H12C11.7167 1.84178 11.4793 1.75338 11.288 1.57657C11.0967 1.39976 11.0007 1.1812 11 0.920892C10.9993 0.660586 11.0953 0.442028 11.288 0.265217C11.4807 0.0884057 11.718 0 12 0H15C16.3833 0 17.5627 0.449088 18.538 1.34726C19.5133 2.24544 20.0007 3.33117 20 4.60446C19.9993 5.87774 19.5117 6.96378 18.537 7.86257C17.5623 8.76136 16.3833 9.21014 15 9.20892H12Z" fill="#FFFEFC"/>
                </svg>
                <a href="https://www.beep-safety.com/">beep-safety.com</a>
              </div>
              <div className={styles.link}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="#FFFEFC"/>
                </svg>
                <a href="https://www.instagram.com/beep.safety/">beep.safety</a>
              </div>
              <div className={styles.link}>
              <svg width="20" height="16" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 4C12.7348 4 12.4804 4.10536 12.2929 4.29289C12.1054 4.48043 12 4.73478 12 5V13C12 13.2652 12.1054 13.5196 12.2929 13.7071C12.4804 13.8946 12.7348 14 13 14H17C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H13ZM16 6H14V12H16V6Z" fill="#FFFEFC"/>
                <path d="M5 4C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5C4 5.26522 4.10536 5.51957 4.29289 5.70711C4.48043 5.89464 4.73478 6 5 6H9C9.26522 6 9.51957 5.89464 9.70711 5.70711C9.89464 5.51957 10 5.26522 10 5C10 4.73478 9.89464 4.48043 9.70711 4.29289C9.51957 4.10536 9.26522 4 9 4H5ZM5 8C4.73478 8 4.48043 8.10536 4.29289 8.29289C4.10536 8.48043 4 8.73478 4 9C4 9.26522 4.10536 9.51957 4.29289 9.70711C4.48043 9.89464 4.73478 10 5 10H9C9.26522 10 9.51957 9.89464 9.70711 9.70711C9.89464 9.51957 10 9.26522 10 9C10 8.73478 9.89464 8.48043 9.70711 8.29289C9.51957 8.10536 9.26522 8 9 8H5ZM4 13C4 12.7348 4.10536 12.4804 4.29289 12.2929C4.48043 12.1054 4.73478 12 5 12H9C9.26522 12 9.51957 12.1054 9.70711 12.2929C9.89464 12.4804 10 12.7348 10 13C10 13.2652 9.89464 13.5196 9.70711 13.7071C9.51957 13.8946 9.26522 14 9 14H5C4.73478 14 4.48043 13.8946 4.29289 13.7071C4.10536 13.5196 4 13.2652 4 13Z" fill="#FFFEFC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V15C0 15.7956 0.31607 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H19C19.7956 18 20.5587 17.6839 21.1213 17.1213C21.6839 16.5587 22 15.7956 22 15V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0H3ZM19 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16H19C19.2652 16 19.5196 15.8946 19.7071 15.7071C19.8946 15.5196 20 15.2652 20 15V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2Z" fill="#FFFEFC"/>
              </svg>
                <a href="https://beep-vlog.vercel.app/">beep-vlog.vercel.app</a>
              </div>
            </div>
            <div>
              <Image className={styles.mockup} src={'/images/beep/mockup/mockup_3.png'} alt="logo" width={876} height={905} />
            </div>
          </div>
          {/**********  LEARN MORE ***********/}
        </div>
        <Footer />
      </div>
    </>
  );
}
