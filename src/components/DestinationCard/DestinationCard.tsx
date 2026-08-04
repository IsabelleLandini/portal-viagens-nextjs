import Image from "next/image";
import styles from "./DestinationCard.module.css";

type DestinationCardProps = {
    image: string;
    nome: string;
    descricao: string;
};

export default function DestinationCard({
    image,
    nome,
    descricao,
}: DestinationCardProps) {
    return (
        <article className={styles.card}>
            <Image 
                src={image}     
                alt={nome}
                width={400}
                height={250} 
            />

            <div className={styles.content}>
                <h2>{nome}</h2>

                <p>{descricao}</p>
            </div>
        </article>
    );
}