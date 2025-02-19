import styles from "../Introduction/Introduction.module.css";
import { useState, useEffect } from "react";

export default function Introduction(){
    const roles = ["Digital Designer", "UX/UI Designer"];
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0); 
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[index];

        let timeout;

        if(deleting) {
            timeout = setTimeout(() => {
                setText(currentRole.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            }, 25);
        } else {
            timeout = setTimeout(() => {
                setText(currentRole.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }, 50);
        }
        if (!deleting && charIndex === currentRole.length) {
            setTimeout(() => setDeleting(true), 1000);
        } else if (deleting && charIndex === 0){
            setDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % roles.length)
        }

        return () => clearTimeout(timeout);

    }, [charIndex, deleting, roles, index]);

    return (
        <div className={styles.sectionOne}>
              <div className={styles.sectionOneHeader}>
                <h1>
                  Hello! I am <span>Jumi</span>
                  <br />
                  <span>Join my journey</span> as a
                  <br />
                  passionate <span>{text}</span>
                </h1>
              </div>
            </div>
    )
    
}