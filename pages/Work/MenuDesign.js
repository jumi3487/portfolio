import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/Sparkly.module.css";
import Image from 'next/image';
import Footer from "../../components/Footer";

export default function MenuDesign(){
    return (
        <>
        <Head>
            <title> Menu Design </title>
        </Head>

        <div className={styles.body}>
            {/* Navbar */}
            <Header />
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Graphic Designs / <span>Menu Design</span></h1>
                </div>
                <div>
                    <img 
                        src="/images/menu-2.png" 
                        alt="Menu Thumbnail"
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
                                <p className={styles.value}>Graphic Designer / Video Editor</p>
                            </div>
                            <div className={styles.infoRow}>
                                <p className={styles.label}>TOOLS</p>
                                <p className={styles.value}>Adobe Illustrator, Adobe After Effects</p>
                            </div>
                            </div>

                            {/* Right Column */}
                            <div className={styles.rightColumn}>
                                <h3 className={styles.overviewTitle}>Overview</h3>
                                <p className={styles.overviewText}>
                                    <strong>“Menu Design”</strong> is a motion graphics project that explains the five different layers of the ocean. It was made using—&nbsp;
                                    <strong>Adobe Illustrator</strong> and <strong>Adobe After Effects</strong> to create a short animated video. The video helps viewers learn about each ocean layer, from the
                                    <strong>sunlit surface</strong> to the <strong>deepest, darkest depths</strong> . It includes simple visuals and smooth animations to show how the ocean changes at different depths and what kind of sea creatures live there.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img 
                        src="/images/menu-page-1.png" 
                        alt="Menu Thumbnail"
                        className={styles.image}
                    />
                    <img 
                        src="/images/menu-page-2.png" 
                        alt="Menu Thumbnail"
                        className={styles.image}
                    />
                    <img 
                        src="/images/menu-page-3.png" 
                        alt="Menu Thumbnail"
                        className={styles.image}
                    />
                </div>
            </div>
            <Footer />
        </div>

        </>
    )
}