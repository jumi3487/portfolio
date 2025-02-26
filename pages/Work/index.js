import { useState } from "react";
import Head from "next/head";
import projects from "../../data/projects";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import Image from "next/image";
import styles from "../../styles/Work.module.css";
import Footer from "../../components/Footer";
import Link from 'next/link';

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("Projects");

  const categories = ["Projects", "Graphic Designs", "Motion Graphics", "Others"];

  // ✅ Filtering logic (Only shows "Projects" first)
  const filteredProjects = projects.filter((project) => project.category === selectedCategory);

  return (

    <>
    <div className={styles.body}>
      <Head>
        <title>Works</title>
      </Head>

      <div>
        {/* Navbar */}
        <Header />

        {/* Title Section */}
        <div className={styles.container}>
          <div>
            <section>
              <h1 className={styles.header}>Works</h1>
              <div className={styles.filters}>
                {categories.map((category, index) => (
                  <span key={category}>
                    <button
                      className={selectedCategory === category ? styles.activeButton : styles.button}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                    {index !== categories.length - 1 && <span> / </span>} 
                  </span>
                ))}
              </div>
            </section>

            {/* Project Grid */}
            <section className={styles.cardContainer}>
              {filteredProjects.map((project) => (
                <Link href={`/Work/${project.title}`} key={project.id} passHref>
                <ProjectCard
                  image={project.image}
                  name={project.name}
                  date={project.date}
                  width={project.width * 0.8} // Adjust dynamically
                  height={project.height * 0.8}
                  className={styles.image}
                />
              </Link>
              ))}
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
}
