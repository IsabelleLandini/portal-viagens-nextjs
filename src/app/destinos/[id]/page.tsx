import Image from "next/image";
import { destinos } from "@/data/destinos";
import styles from "./page.module.css";
import Link from "next/link";

type DestinoPageProps = {
    params: Promise <{
        id: string;
    }>;
};

export default async function DestinoDetalhes({ params }: DestinoPageProps) {
    const { id } = await params;
    
    const destino = destinos.find(
        (item) => item.id === Number(id)
    );

    if(!destino) {
        return (
            <main>
                <h1>Destino não encontrado</h1>
            </main>
        );
    }

    return (
        <main className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src={destino.imagem}
                    alt={destino.nome}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>
                <h1>{destino.nome}</h1>
                
                <p>{destino.descricao}</p>

                <Link href="/destinos" className={styles.backLink}>
                    Voltar para destinos
                </Link>
            </div>
        </main>
    );
   
}