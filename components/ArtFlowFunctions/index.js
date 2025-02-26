"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ArtFlowFunctions.module.css"

export default function ArtFlowFunctions() {
    const [activeScreen, setActiveScreen] = useState(1);

    const screens = [
        {
            id: 1,
            title: "AI PROMPT GENERATOR",
            image: "/images/artflow/mockup1.png",
        },
        {
            id: 2,
            title: "DRAWING BOARD",
            image: "/images/artflow/mockup2.png",
        },
        {
            id: 3,
            title: "CHATBOX",
            image: "/images/artflow/mockup3.png",
        },
        {
            id: 4,
            title: "PERSONAL PROFILE",
            image: "/images/artflow/mockup4.png",
        },
    ];

    useEffect(() => {
        screens.forEach((screen) => {
            const img = new Image();
            img.src = screen.image;
        });
    }, []);

    return (
        <div className={styles.container}>
            {/* Features Section */}
            <div className={styles.features}>
                <h1 className={styles.title}>Main Features</h1>
                <div className={styles.buttonGroup}>
                    {screens.map((screen) => (
                        <div
                            key={screen.id}
                            onClick={() => setActiveScreen(screen.id)}
                            className={`${styles.step} ${activeScreen === screen.id ? styles.activeStep : ""}`}>
                                <div className={styles.stepHead}>
                                    <div className={`${styles.stepNumber} ${activeScreen === screen.id ? styles.activeNumber : ""}`}>
                                        {screen.id}
                                    </div>
                                    <h3 className={`${styles.stepTitle} ${activeScreen === screen.id ? styles.activeTitle : ""}`}>
                                        {screen.title}
                                    </h3>
                                </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Display Section */}
            {/* <div className={styles.imgContainer}> */}
                <AnimatePresence mode="wait">
                    {screens.map(
                        (screen) =>
                            activeScreen === screen.id && (
                                <motion.img
                                    key={screen.id}
                                    src={screen.image}
                                    alt={screen.title}
                                    className={styles.image}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                            )
                    )}
                </AnimatePresence>
            {/* </div> */}
        </div>
    );
}
