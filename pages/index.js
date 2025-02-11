import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import HeadArea from "../components/HeadArea"

export default function Home() {
  return (
    <>

      <HeadArea/>
      <main className={styles.main}>
        <Header />
        <h1>Website under constructions 🚧</h1>
      </main>
      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </>
  );
}
