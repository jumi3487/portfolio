import { useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/About.module.css";

export default function About() {
  useEffect(() => {
    // Do dynamic imports inside useEffect
    const loadAnimations = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      const gsap = (await import('gsap')).default;
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.lagSmoothing(0);

      const cards = gsap.utils.toArray(".card");
      const rotations = [-12, 12, -10, 10, -5, 5, -2];

      cards.forEach((card, index) => {
        gsap.set(card, {
          y: window.innerHeight,
          rotate: rotations[index % rotations.length],
        });
      });

      ScrollTrigger.create({
        trigger: ".stickyCards",
        start: "top top",
        end: `+=${window.innerHeight * 8}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalCards = cards.length;
          const progressPerCard = 1 / totalCards;

          cards.forEach((card, index) => {
            const cardStart = index * progressPerCard;
            let cardProgress = (progress - cardStart) / progressPerCard;
            cardProgress = Math.min(Math.max(cardProgress, 0), 1);

            let yPos = window.innerHeight * (1 - cardProgress);
            let xPos = 0;

            if (cardProgress === 1 && index < totalCards - 1) {
              const remainingProgress =
                (progress - (cardStart + progressPerCard)) /
                (1 - (cardStart + progressPerCard));

              if (remainingProgress > 0) {
                const distanceMultiplier = 1 - index * 0.15;
                xPos =
                  -window.innerWidth * 0.3 * distanceMultiplier * remainingProgress;

                yPos =
                  -window.innerHeight *
                  0.3 *
                  distanceMultiplier *
                  remainingProgress;
              }
            }

            gsap.to(card, {
              y: yPos,
              x: xPos,
              duration: 0,
              ease: "none",
            });
          });
        },
      });
    };

    loadAnimations();
  }, []);

  return (
    <>
      <div className={styles.body}>
        <Head>
          <title>About</title>
        </Head>
        <Header />
        <div className={styles.container}>
          <section className={`${styles.stickyCards} stickyCards`}>
            {[1, 2, 3, 7, 4, 5, 6].map((n) => (
              <div key={n} className={`${styles.card} card`}>
                <img
                  className={styles.image}
                  src={`/images/about/${n}.png`}
                  alt={`About ${n}`}
                />
              </div>
            ))}
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
