import Image from "next/image";
import styles from "./MotionGraphics.module.css";

const motionGraphics = [
  {
    id: "01",
    title: "How To Make French Fries?",
    image: "/images/french-fries-thumbnail.png",
    views: 165, // Number above arrow
  },
  {
    id: "02",
    title: "Five Layers of Ocean",
    image: "/images/ocean-layers-thumbnail.png",
    views: null, // No number for this one
  },
];

export default function MotionGraphics() {
  return (
    <section className={styles.container}>
      {/* Motion Graphic Cards */}
      {/*Motion Graphic 1*/}
        <div className={styles.motionGraphicContainer}>
            <div className={styles.motionGraphicProjects}>
                <Image className={styles.projectsCardImg} src={'/images/lunette-thumbnail.png'} alt="logo" width={800} height={533} />
                <div className={styles.ProjectInfo}>
                <h1 className={styles.motionGraphicProjectsh1}>01</h1>
                <h2 className={styles.motionGraphicProjectsh2}>How To Make French Fries?</h2>
                <button className={styles.projectsContentButton}>Watch it</button>
                </div>
            </div>
                    {/*Motion Graphic 1*/}
                    {/*Motion Graphic 2*/}
            <div className={styles.motionGraphicProjects2}>
                    <Image className={styles.projectsCardImg} src={'/images/lunette-thumbnail.png'} alt="logo" width={800} height={533} />
                    <div className={styles.ProjectInfo2}>
                    <h1 className={styles.motionGraphicProjectsh1}>02</h1>
                    <h2 className={styles.motionGraphicProjectsh2}>Five Layers Of Ocean</h2>
                    <button className={styles.projectsContentButton}>Watch it</button>
                    </div>
            </div>
            {/*Motion Graphic 2*/}
        </div>
    </section>
  );
}
