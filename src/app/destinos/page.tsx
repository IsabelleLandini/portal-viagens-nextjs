import DestinationCard from "@/components/DestinationCard/DestinationCard";
import styles from "./page.module.css";
import { destinos } from "@/data/destinos";


export default function Destinos() {
  return (
    <main className={styles.imagecontainer}>
      <h1 className={styles.title}>Destinos</h1>

      <section className={styles.grid}>
        {destinos.map((destino) => (
            <DestinationCard
                key={destino.id}
                id={destino.id}
                nome={destino.nome}
                imagem={destino.imagem}
                descricao={destino.descricao}
            />
        ))}
      </section>
    </main>
  );
}