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
            </div>
            <Footer />
        </div>

        </>
    )
}