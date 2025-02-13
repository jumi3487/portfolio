import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import HeadArea from "../components/HeadArea";
import MotionGraphics from "../components/MotionGraphics";
import GraphicDesigns from "../components/GraphicDesigns";



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

            {/*Section Two*/}
            <div className={styles.sectionTwo}>
              <div className={styles.sectionTwoContainer}>
                <div className={styles.sectionTwoHeader}>
                  <p>
                    Projects 
                  </p>
                  <button>
                    <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icon/Arrow/Next">
                    <path id="Vector" d="M18.1538 2L32 14.8571L18.1538 27.7143M30.0769 14.8571L2 14.8571" stroke="#181818" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>
                    </button>
                  </div>
                <div className={styles.sectionTwoProjects}>
                  {/*Section Two - Projects - Beep*/}
                  <div className={styles.projectsTitle}>
                    <h3>Beep</h3>
                    <h3>Sep – Dec<br/>2024</h3>
                  </div>
                  <div>
                    <Image className={styles.projectsCardImg} src={'/images/beep-thumbnail-2.png'} alt="logo" width={800} height={533} />
                  </div>
                  <div className={styles.projectsInfo}>
                    <div className={styles.projectsContent}>
                      <p>Beep is a real-time safety app that empowers users with a crime heat map, SOS alerts, and AI-driven navigation to ensure secure travel and access to safe zones.
                      </p>
                      <p>
                      <strong>My role:</strong> Lead Digital Designer and Frontend Developer
                      </p>
                    </div>
                    <button className={styles.projectsContentButton}>Learn more</button>
                  </div>
                  {/*Section Two - Projects - Beep*/}
                </div>
      
                <div>
                  <div className={styles.sectionTwoProjects}>
                    {/*Section Two - Projects - ArtFlow*/}
                    <div className={styles.projectsTitle}>
                      <h3>ArtFlow</h3>
                      <h3>Jan – May<br/>2024</h3>
                    </div>
                    <div>
                      <Image className={styles.projectsCardImg} src={'/images/artflow-thumbnail-2.png'} alt="logo" width={800} height={533} />
                    </div>
                    <div className={styles.projectsInfo}>
                      <div className={styles.projectsContent}>
                        <p>ArtFlow is an AI-powered drawing app that helps artists generate ideas and improve their workflow. It has a clean, easy-to-use design with no distractions. Users can enter ideas, and the AI creates prompts to boost creativity, making digital art smoother for beginners and pros alike.
                        </p>
                        <p>
                        <strong>My role:</strong> Lead Digital Designer, UX/UI Designer and Frontend Developer
                        </p>
                      </div>
                      <button className={styles.projectsContentButton}>Learn more</button>
                    </div>
                    {/*Section Two - Projects - ArtFlow*/}
                  </div>
                </div>

                <div>
                   {/*Section Two - Projects - Lunette*/}
                   <div className={styles.sectionTwoProjects}>
                    {/*Section Two - Projects - ArtFlow*/}
                    <div className={styles.projectsTitle}>
                      <h3>Lunette</h3>
                      <h3>Nov – Dec<br/>2023</h3>
                    </div>
                    <div>
                      <Image className={styles.projectsCardImg} src={'/images/lunette-thumbnail.png'} alt="logo" width={800} height={533} />
                    </div>
                    <div className={styles.projectsInfo}>
                      <div className={styles.projectsContent}>
                        <p>Lunette is a premium eyewear brand catering to fashion-conscious individuals who value both luxury and functionality. The website wireframe and interface design prioritize a cohesive digital experience that reflects the brand’s sophisticated identity while ensuring usability and accessibility.
                        </p>
                        <p>
                        <strong>My role:</strong> UX/UI Designer
                        </p>
                      </div>
                      <button className={styles.projectsContentButton}>Learn more</button>
                    </div>
                    {/*Section Two - Projects - Lunette*/}
                </div>
              </div>

              <div className={styles.divide}></div>
              </div>

              {/*Section Three*/}
              <div className={styles.sectionThree}>
                <div className={styles.sectionThreeContainer}>
                  <div className={styles.sectionTwoHeader}>
                    <p>
                      Graphic Designs 
                    </p>
                    <button>
                      <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Icon/Arrow/Next">
                      <path id="Vector" d="M18.1538 2L32 14.8571L18.1538 27.7143M30.0769 14.8571L2 14.8571" stroke="#181818" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      </svg>
                      </button>
                  </div>
                  <GraphicDesigns/>
              </div>
              {/*Section Three End*/}

              <div className={styles.divide}></div>

              <div className={styles.sectionFour}>
                {/*Section Four*/}
                <div>
                  <div className={styles.sectionTwoHeader}>
                    <p>
                      Motion Graphics 
                    </p>
                    <button>
                      <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Icon/Arrow/Next">
                      <path id="Vector" d="M18.1538 2L32 14.8571L18.1538 27.7143M30.0769 14.8571L2 14.8571" stroke="#181818" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      </svg>
                    </button>
                  </div>
                    <MotionGraphics/>
                </div>
                {/*Section Four*/}
              </div>  
              <div className={styles.divide}></div> 

              </div>
            </div>
          </div>
      </main>
      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </>
  );
}
