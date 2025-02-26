import styles from './GraphicDesigns.module.css';
import Image from "next/image";
import Link from "next/link";

const graphicDesigns = [
    { src: "/images/illustration-thumbnail-3.png", alt: "Illustration of a Japanese Café", href: "/Work/Illustration" },
    { src: "/images/mechanic-illustration-thumbnail-3.png", alt: "Coffee Maker Product Render", href: "/Work/MechanicIllustration" },
    { src: "/images/sparkly-thumbnail-3.png", alt: "Sparkly Soda Can Packaging", href: "/Work/Sparkly" },
    { src: "/images/menu-thumbnail-3.png", alt: "Savoria Bistro Menu Design", href: "/pages/Work/MenuDesign" },
];

export default function GraphicDesigns() {
    return (
      <section className={styles.container}>
        <div className={styles.sectionThreeContainer}>
            <div className={styles.sectionHeader}>
              <p>Graphic Designs</p>
              <button>
                <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Icon/Arrow/Next">
                <path id="Vector" d="M18.1538 2L32 14.8571L18.1538 27.7143M30.0769 14.8571L2 14.8571" stroke="#181818" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                </svg>
              </button>
            </div>

        {/* Grid Layout */}
        <div className={styles.grid}>
          {graphicDesigns.map((project, index) => (
            <Link key={index} href={project.href} passHref>
              <div className={styles.card}>
                <img
                  src={project.src}
                  alt={project.alt}
                  className={styles.image}
                />
              </div>
            </Link>
          ))}
        </div>
        </div>
      </section>
    );
}
