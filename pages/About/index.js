import { useState } from "react";
import Head from "next/head";
import projects from "../../data/projects";
import Header from "../../components/Header";
import Image from "next/image";
import styles from "../../styles/About.module.css";
import Footer from "../../components/Footer";
import Link from 'next/link';

export default function About(){
    return (
        <>
        <div className={styles.body}>
            <Head>
                <title>Works</title>
            </Head>
            <div>
                {/* Navbar */}
                <Header />
                <div className={styles.container}>
                    <section className={styles.stickyCards}>
                        <div className={styles.card}>
                            <img className={styles.image} src="/images/about/1.png"/>
                        </div>
                        <div className={styles.card}>
                            <img className={styles.image} src="/images/about/2.png"/>
                        </div>
                        <div className={styles.card}>
                            <img className={styles.image} src="/images/about/3.png"/>
                        </div>
                        <div className={styles.card}>
                            <img className={styles.image} src="/images/about/4.png"/>
                        </div>
                        <div className={styles.card}>
                            <img className={styles.image} src="/images/about/5.png"/>
                        </div>
                        <div className={styles.card}>
                            <img className={styles.image} src="/images/about/6.png"/>
                        </div>
                        <div className={styles.card}>
                            <img className={styles.image} src="/images/about/7.png"/>
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>
        </div>
        </>
    )

}