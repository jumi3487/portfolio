import styles from "./Gallery.module.css";
import Image from "next/image";

const gallery = [
    { src: "/images/gallery/1.png", alt: "Exhibition Poster" },
    { src: "/images/gallery/2.png", alt: "Coffee Poster" },
    { src: "/images/gallery/3.png", alt: "Magazine" },
    { src: "/images/gallery/4.png", alt: "The Strafruit Tree" },
    { src: "/images/gallery/5.png", alt: "Stickers" },
  ];

export default function Gallery(){
    return(
    <>
    <div className={styles.row}>
        <div className={styles.column1}>
            <div>
                <Image className={styles.image} src={'/images/gallery/1.png'} alt="Exhibition Poster" width={410} height={550} />
            </div>
            <div>
                <Image className={styles.image} src={'/images/gallery/2.png'} alt="Coffee Poster" width={410} height={550}/>
            </div>
            <div>
                <Image className={styles.image} src={'/images/gallery/3.png'} alt="Magazine" width={870} height={550}/>
            </div>
            
        </div>
        <div className={styles.column2}>
            <div>
                <Image className={styles.image} src={'/images/gallery/4.png'} alt="The Strafruit Tree" width={950} height={551}/>
            </div>
            <div>
                <Image className={styles.image} src={'/images/gallery/5.png'} alt="Stickers" width={760} height={550}/>
            </div>
        </div>
    </div>
    </>
)
}