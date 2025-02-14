import styles from "./Gallery.module.css";
import Image from "next/image";

const gallery = [
    { src: "/images/gallery/1.png", alt: "Exhibition Poster" },
    { src: "/images/gallery/2.png", alt: "Coffee Poster" },
    { src: "/images/gallery/3.png", alt: "Magazine" },
    { src: "/images/gallery/4.png", alt: "The Starfruit Tree" },
    { src: "/images/gallery/5.png", alt: "Stickers" },
];


export default function Gallery() {
    return (
        <div className={styles.row}>
            {/* First Row */}
            <div className={styles.column1}>
                <Image className={styles.image} src={gallery[0].src} alt={gallery[0].alt} width={410} height={550} />
                <Image className={styles.image} src={gallery[1].src} alt={gallery[1].alt} width={410} height={550} />
                <Image className={styles.image} src={gallery[2].src} alt={gallery[2].alt} width={870} height={550} />
            </div>

            {/* Second Row */}
            <div className={styles.column2}>
                <Image className={styles.image} src={gallery[3].src} alt={gallery[3].alt} width={950} height={551} />
                <Image className={styles.image} src={gallery[4].src} alt={gallery[4].alt} width={760} height={550} />
            </div>
        </div>
    );
}
