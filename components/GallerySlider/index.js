import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./GallerySlider.module.css";

const gallery = [
  { src: "/images/gallery/1.png", alt: "Exhibition Poster" },
  { src: "/images/gallery/2.png", alt: "Coffee Poster" },
  { src: "/images/gallery/3.png", alt: "Magazine" },
  { src: "/images/gallery/4.png", alt: "The Starfruit Tree" },
  { src: "/images/gallery/5.png", alt: "Stickers" },
];

export default function GallerySlider() {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}  // Adjust based on layout
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Image
              src={item.src}
              alt={item.alt}
              layout="responsive"
              width={800}
              height={500}
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
