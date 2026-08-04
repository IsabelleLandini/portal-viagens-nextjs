import styles from "./Hero.module.css"
import Link from "next/link";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>Explore novos destinos</h1>

                <p>
                    Descubra lugares incríveis e planeje sua próxima aventura.
                </p>

                <Link href="/destinos">Conheça destinos</Link>
            </div>
        </section>
    );
}