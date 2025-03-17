import Image from "next/image";
import styles from "./MotionGraphics.module.css";

const motionGraphics = [
  {
    id: "01",
    title: "How To Make French Fries?",
    image: "/images/french-fries.png",
    views: 165, // Number above arrow
  },
  {
    id: "02",
    title: "Five Layers of Ocean",
    image: "/images/five-layers.png",
    views: null, // No number for this one
  },
];

export default function MotionGraphics() {
  return (
    <section className={styles.container}>
      {/* Motion Graphic Cards */}
      {/*Motion Graphic 1*/}

        <div className={styles.motionGraphicContainer}>
          <div className={styles.sectionHeader}>
              <p>
                Motion Graphics 
              </p>
              <button>
                <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Icon/Arrow/Next">
                <path id="Vector" d="M18.1538 2L32 14.8571L18.1538 27.7143M30.0769 14.8571L2 14.8571" stroke="#181818" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
              </button>
            </div>
            <div className={styles.motionGraphicProjects}>
                <a className={styles.link} href="/Work/FrenchFries" passHref><img className={styles.projectsCardImg} src={'/images/french-fries.png'} alt="thumbnail" /></a>
                <div className={styles.ProjectInfo}>
                <h1 className={styles.motionGraphicProjectsh1}>01</h1>
                <h2 className={styles.motionGraphicProjectsh2}>How To Make French Fries?</h2>
                <a className={styles.link} href="/Work/FrenchFries" passHref><button className={styles.projectsContentButton}>Watch it</button></a>
                </div>
            </div>
                    {/*Motion Graphic 1*/}
                    {/*Motion Graphic 2*/}
            <div className={styles.motionGraphicProjects2}>
                <a className={styles.link} href="/Work/FiveLayersOfOcean" passHref><img className={styles.projectsCardImg} src={'/images/five-layers.png'} alt="thumbnail" /></a>
                <div className={styles.ProjectInfo2}>
                <h1 className={styles.motionGraphicProjectsh1}>02</h1>
                <h2 className={styles.motionGraphicProjectsh2}>Five Layers Of Ocean</h2>
                <a className={styles.link} href="/Work/FiveLayersOfOcean" passHref><button className={styles.projectsContentButton}>Watch it</button></a>
                </div>
            </div>
            {/*Motion Graphic 2*/}
        </div>
    </section>
  );
}
