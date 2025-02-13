import styles from './GraphicDesigns.module.css';
import Image from "next/image";

const graphicDesigns = [
    { src: "/images/illustration-thumbnail-3.png", alt: "Illustration of a Japanese Café" },
    { src: "/images/mechanic-illustration-thumbnail-3.png", alt: "Coffee Maker Product Render" },
    { src: "/images/sparkly-thumbnail-3.png", alt: "Sparkly Soda Can Packaging" },
    { src: "/images/menu-thumbnail-3.png", alt: "Savoria Bistro Menu Design" },
  ];

  export default function GraphicDesigns() {
    return (
      <section className={styles.container}>
  
        {/* Grid Layout */}
        <div className={styles.grid}>
          {graphicDesigns.map((project, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={project.src}
                alt={project.alt}
                width={500}
                height={350}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }