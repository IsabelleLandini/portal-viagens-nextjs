import Image from "next/image";
import styles from "./DestinationCard.module.css";
import Link from "next/link";

type DestinationCardProps = {
    id: number;
    imagem: string;
    nome: string;
    descricao: string;
};

export default function DestinationCard({
    id,
    imagem,
    nome,
    descricao,
}: DestinationCardProps) {
    return (
        <Link href={`/destinos/${id}`} className={styles.card}>
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
        </Link>
    );
}