"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../BeepFunctions/BeepFunctions.module.css";

export default function BeepFunctions() {
    const [activeScreen, setActiveScreen] = useState(1);

    const screens = [
        {
            id: 1,
            title: "CRIME TIME HEAT MAP",
            description: "Stay informed with live updates on crime hotspots, helping you avoid unsafe areas and navigate confidently.",
            image: "/images/beep/mockup/map.png",
        },
        {
            id: 2,
            title: "SOS ALARM ALERT",
            description: "Activate a loud SOS alarm to deter threats and instantly alert emergency contacts.",
            image: "/images/beep/mockup/sos.png",
        },
        {
            id: 3,
            title: "SNAPSHOT",
            description: "Snap enables users to pin media, document incidents, share with contacts, and access media history.",
            image: "/images/beep/mockup/snap.png",
        },
        {
            id: 4,
            title: "INSTANT EMERGENCY SMS",
            description: "Instantly send an SMS alert with your live location to your emergency contacts.",
            image: "/images/beep/mockup/message.png",
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
                                <div>
                                        {/* Description only appears when this feature is active */}
                                        {activeScreen === screen.id && (
                                        <motion.p 
                                            className={styles.stepDescription} 
                                            initial={{ opacity: 0, height: 0 }} 
                                            animate={{ opacity: 1, height: "auto" }} 
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}>
                                            {screen.description}
                                        </motion.p>)}
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
