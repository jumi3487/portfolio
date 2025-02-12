import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'; // ✅ Import useRouter to detect active page
import styles from "./Header.module.css";

export default function Header() {
    const router = useRouter(); // ✅ Get the current route

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link href="/" passHref>
                        <Image className={styles.logoImage} src={'/images/logo.svg'} alt="logo" width={40} height={51} />
                    </Link>
                </div>
                <div className={styles.nav}>
                    <section>
                        <Link href="/" passHref className={styles.link}>
                            <p className={router.pathname === "/" ? styles.active : ""}>Home</p>
                        </Link>
                    </section>
                    <section>
                        <Link href="/Works" passHref className={styles.link}>
                            <p className={router.pathname === "/Works" ? styles.active : ""}>Works</p>
                        </Link>
                    </section>
                    <section>
                        <Link href="/about" passHref className={styles.link}>
                            <p className={router.pathname === "/about" ? styles.active : ""}>About</p>
                        </Link>
                    </section>
                    <section>
                        <Link href="/contacts" passHref className={styles.link}>
                            <p className={router.pathname === "/contacts" ? styles.active : ""}>Contacts</p>
                        </Link>
                    </section>
                </div>
            </div>
        </>
    );
}
