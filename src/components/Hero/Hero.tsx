import styles from "./Hero.module.css"
import Link from "next/link";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h1>Descubra destinos inesquecíveis</h1>

                    <p>
                         Inspire-se para sua próxima viagem e conheça lugares incríveis ao redor do mundo.
                    </p>

                    <Link href="/destinos" className={styles.button}>
                        Explorar destinos
                    </Link>
                </div>
            </div>
        </section>
    );
}