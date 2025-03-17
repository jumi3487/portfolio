import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/MenuDesign.module.css";
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
                                <p className={styles.value}>Graphic Designer</p>
                            </div>
                            <div className={styles.infoRow}>
                                <p className={styles.label}>TOOLS</p>
                                <p className={styles.value}>Adobe Illustrator, Adobe InDesign</p>
                            </div>
                            </div>

                            {/* Right Column */}
                            <div className={styles.rightColumn}>
                                <h3 className={styles.overviewTitle}>Overview</h3>
                                <p className={styles.overviewText}>
                                    <strong>“Menu Design”</strong> is a school exercise focused on applying design skills using—&nbsp;
                                    <strong>Adobe Illustrator</strong> and <strong>InDesign</strong> to create a well-organized and visually appealing menu. The project emphasizes
                                    <strong>layout design, typography, and creativity</strong> , ensuring the menu is both functional and aesthetically engaging.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img 
                        src="/images/menu-page-1.png" 
                        alt="Menu Thumbnail"
                        className={styles.menu1}
                    />
                    <img 
                        src="/images/menu-page-2.png" 
                        alt="Menu Thumbnail"
                        className={styles.menu2}
                    />
                    <img 
                        src="/images/menu-page-3.png" 
                        alt="Menu Thumbnail"
                        className={styles.menu3}
                    />
                </div>
            </div>
            <Footer />
        </div>

        </>
    )
}