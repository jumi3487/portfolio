import styles from "../../styles/ArtFlow.module.css";
import Image from 'next/image';
import { useRef } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArtFlowFunctions from "../../components/ArtFlowFunctions";
import ArtFlowCarousel from "../../components/ArtFlowCarousel";
import ArtFlowStyleGuide from "../../components/ArtFlowStyleGuide";
import ArtFlowFrames from "@/components/ArtFlowFrames";


export default function ArtFlow(){
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
            <title>ArtFLow</title>
        </Head>

        <div className={styles.body}>
            {/* Navbar */}
            <Header />
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Projects / <span>ArtFlow</span></h1>
                </div>
                <div>
                    <Image 
                    src="/images/artflow/1.png" 
                    width={1473} 
                    height={991} 
                    alt="ArtFlow Thumbnail"
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
                            <p className={styles.value}>January – May 2024</p>
                            </div>
                            <div className={styles.infoRow}>
                            <p className={styles.label}>ROLE</p>
                            <p className={styles.value}>UX/UI Designer, Frontend Developer and Researcher</p>
                            </div>
                            <div className={styles.infoRow}>
                            <p className={styles.label}>TOOLS</p>
                            <p className={styles.value}>Figma, Next.js</p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className={styles.rightColumn}>
                            <div className={styles.rightColumnContent}>
                                <h3 className={styles.overviewTitle}>Overview</h3>
                                <p className={styles.overviewText}>
                                    <strong>“ArtFlow”</strong> is an <strong>AI-powered drawing app</strong> that generates prompts to help artists come up 
                                    with ideas and improve their workflow. With an attractive yet simple design,
                                    its interface is smooth and free of distractions. 
                                    The <strong>AI</strong> allows users to input their ideas 
                                    and <strong>generate prompts</strong> that <strong>enhance creativity</strong>. <strong>ArtFlow</strong> makes digital art 
                                    <strong>easier and more efficient</strong> for both beginners and professionals.
                                </p>
                                <div className={styles.overviewBtn}>
                                    <a className={styles.link} href="https://artflow-d3.vercel.app/">
                                        <button className={styles.prototypeBtn}>Try it out
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
                    <div className={styles.projectDetailsContent}>
                        <h2>Design Purpose</h2>
                        <p>ArtFlow is a distraction-free space for designers to overcome creative blocks and stay inspired. With AI-generated prompts, a clean interface, and smart tools, it streamlines workflow, fosters creativity, and keeps artists focused.</p>
                    </div>
                    <div>
                        <Image 
                            src="/images/artflow/2.png" 
                            width={730} 
                            height={260} 
                            alt="ArtFlow Banner"
                            className={styles.image}
                        />
                    </div>
                </div>
                {/** Details of the projects**/}

                <div>
                    <ArtFlowFunctions/>
                </div>
                    <div className={styles.artflowSlogan}>
                        <img
                            src="/images/artflow/artflow-2.png" 
                            alt="ArtFlow Slogan"
                        />
                    </div>
                {/**  DEVELOPMENT PROCESS **/}
                <div className={styles.developmentProcess}>
                    <div className={styles.developProcessAgenda}>
                        <div className={styles.section}>
                            <section className={styles.sectionContainer} onClick={() => scrollToSection(personaRef)}>
                                <div className={styles.sectionNumber}>
                                    <h3>01</h3>
                                    <h3>User Personas</h3>
                                </div>
                            </section>
                            <div className={styles.divide}></div>

                            <section className={styles.sectionContainer} onClick={() => scrollToSection(sitemapRef)}>
                                <div className={styles.sectionNumber}>
                                    <h3>02</h3>
                                    <h3>Sitemap</h3>
                                </div>
                            </section>
                            <div className={styles.divide}></div>

                            <section className={styles.sectionContainer} onClick={() => scrollToSection(styleGuideRef)}>
                                <div className={styles.sectionNumber}>
                                    <h3>03</h3>
                                    <h3>Style Guide</h3>
                                </div>
                            </section>
                            <div className={styles.divide}></div>

                            <section className={styles.sectionContainer} onClick={() => scrollToSection(wireframesRef)}>
                                <div className={styles.sectionNumber}>
                                    <h3>04</h3>
                                    <h3>Wireframes</h3>
                                </div>
                            </section>
                            <div className={styles.divide}></div>
                        </div>

                        <div className={styles.developProcessImage}>
                            <img
                                src="/images/artflow/3.png" 
                                alt="ArtFLow Mockup"
                                className={styles.artflowimage}
                            />
                        </div>
                    </div>
                    <div className={styles.projectsDevelopContainer}>
                        <div className={styles.persona} ref={personaRef}>
                            <ArtFlowCarousel className={styles.carousel}/>
                        </div>
                        <div className={styles.sitemap} ref={sitemapRef}>
                            <iframe className={styles.figma} width="800" height="450" src="https://embed.figma.com/design/zMScRDRPTRULIk1omsiy6J/ArtFlow---Sitemap?node-id=0-1&m=dev&embed-host=share" allowfullscreen></iframe>
                        </div>
                        <div className={styles.persona} ref={styleGuideRef}>
                            <ArtFlowStyleGuide className={styles.carousel}/>
                        </div>
                        <div className={styles.persona} ref={wireframesRef}>
                            <ArtFlowFrames className={styles.carousel}/>
                        </div>
                    </div>
                </div>
                {/**  DEVELOPMENT PROCESS **/}
            </div>
            <Footer />
        </div>
        </>
    )
}