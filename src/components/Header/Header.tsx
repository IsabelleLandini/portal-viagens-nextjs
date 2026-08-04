import Link from "next/link";
import styles from "./Header.module.css"

export default function Header(){
    return (
        <header className={styles.header}>
            <h1>Portal Viagens</h1>

            <nav>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="/destinos">Destinos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}