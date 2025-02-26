import styles from "./ArtFlowStyleGuide.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function ArtFlowStyleGuide(){
    const images = [
        "/images/artflow/styleguide_1.png",
        "/images/artflow/styleguide_2.png",
        "/images/artflow/styleguide_3.png",
        "/images/artflow/styleguide_4.png",
        "/images/artflow/styleguide_5.png",
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      // Function to go to the previous slide
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      // Function to go to the next slide
      const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
    
    return (
        <>
        <div className={styles.sliderWrapper}>
            <div>
                <button onClick={nextSlide} className={styles.arrow}>
                    <Image 
                        src="/Icon/Arrow/slider-prev.svg" 
                        width={32.81} 
                        height={28.12} 
                        alt="Slider Arrow Prev"
                    />
                </button>
            </div>
            <div className={styles.ImageWrapper}>
                <img 
                    src={images[currentIndex]}
                    alt={`Persona ${currentIndex + 1}`}
                    className={styles.image}
                />
            </div>
            <div>
                <button onClick={nextSlide} className={styles.arrow}>
                    <Image 
                        src="/Icon/Arrow/slider-next.svg" 
                        width={32.81} 
                        height={28.12}
                        alt="Slider Arrow Next"
                    />
                </button>
            </div>
        </div>
        </>
    )
}