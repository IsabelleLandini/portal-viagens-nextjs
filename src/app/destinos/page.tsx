import DestinationCard from "@/components/DestinationCard/DestinationCard";
import styles from "./page.module.css";

const destinos = [
    {
        id: 1,
        nome: "Paris",
        imagem: "/images/paris.jpg",
        descricao: "Explore a cidade luz, conheça a Torre Eiffel, museus famosos e toda a cultura francesa.",
    },
    {
        id: 2,
        nome: "Nova Iorque",
        imagem: "/images/nova-iorque.jpg",
        descricao: "Descubra a cidade que nunca dorme, com seus arranha-céus, parques e atrações inesquecíveis.",

    },
    {
        id: 3,
        nome: "Londres",
        imagem: "/images/londres.jpg",
        descricao: "Conheça uma das cidades mais históricas do mundo, com seus palácios, museus e cultura única.",
   
    },
    {
        id: 4,
        nome: "Tóquio",
        imagem: "/images/toquio.jpg",
        descricao: "Uma mistura fascinante entre tradição japonesa e tecnologia.",
    },
];

export default function Destinos() {
  return (
    <main className={styles.imagecontainer}>
      <h1 className={styles.title}>Destinos</h1>

      <section className={styles.grid}>
        {destinos.map((destino) => (
            <DestinationCard
                key={destino.id}
                nome={destino.nome}
                imagem={destino.imagem}
                descricao={destino.descricao}
            />
        ))}
      </section>
    </main>
  );
}