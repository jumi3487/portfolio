import projects from "../../data/projects"
import styles from '../ProjectCard/ProjectCard.module.css';
import Image from "next/image";

export default function ProjectCard({ image, width, height, name, date }) {
  return (
    <div className={styles.projectCard}>
      {/* Image */}
      <Image
        src={image}
        alt={name}
        width={width}
        height={height}
        className={styles.projectImage}
      />

      {/* Overlay for hover effect */}
      <div className={styles.overlay}></div>

      {/* Caption (Title & Date) */}
      <div className={styles.captionContainer}>
        <h3>{name}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
}

