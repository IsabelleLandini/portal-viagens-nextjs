import Image from "next/image";
import styles from "./DestinationCard.module.css";

type DestinationCardProps = {
    imagem: string;
    nome: string;
    descricao: string;
};

export default function DestinationCard({
    imagem,
    nome,
    descricao,
}: DestinationCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>
                <Image 
                    src={imagem}     
                    alt={nome}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
           

            <div className={styles.content}>
                <h2>{nome}</h2>

                <p>{descricao}</p>
            </div>
        </article>
    );
}