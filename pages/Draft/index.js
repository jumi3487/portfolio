import GraphicDesigns from "../../components/GraphicDesigns";
import Gallery from "../../components/Gallery";
import GallerySlider from "../../components/GallerySlider";
import BeepCarousel from "../../components/BeepCarousel";
import BeepFunctions from "../../components/BeepFunctions";
import ArtFlowCarousel from "../../components/ArtFlowCarousel";
import styles from "../../styles/Home.module.css";

export default function Draft() {
    return(
        <>

        <Gallery/>
        <BeepCarousel/>
        <BeepFunctions/>
        <div className={styles.div}>
            <ArtFlowCarousel/>
        </div>
        </>
    )
}