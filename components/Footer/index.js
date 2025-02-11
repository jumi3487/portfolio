import Image from 'next/image';
import styles from "./Footer.module.css";

export default function Footer() {
    return (
      <>
        <div className={styles.footer}>
          <div className={styles.contact}>
            <h1 className={styles.heading}>LET’S GET IN TOUCH</h1>
            <p className={styles.contactme}>Contact me</p>
            <h2 className={styles.email}>
              <a 
                  className={styles.email} 
                  href="mailto:jumi3487@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.target.blur()}>
                jumi3487@gmail.com
            </a></h2>
          </div>
          <div className={styles.copyrightLinks}>
            <p>2025 © made by jumipham.com</p>
            <div>
              <p>
              <a className={styles.link} href="#">resume</a>
              </p>
              <p>
                <a className={styles.link} href="#">linkedin</a>
              </p>
              <p>
                <a className={styles.link} href="#">instagram</a>
              </p>
              <p>
                <a className={styles.link} href="#">behance</a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  