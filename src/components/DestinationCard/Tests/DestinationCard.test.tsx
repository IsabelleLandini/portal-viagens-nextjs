import { render, screen } from "@testing-library/react";
import DestinationCard from "../DestinationCard";

test("deve exibir o nome e a descrição do destino", () => {
    render(
        <DestinationCard
            id = {1}
            imagem = "string"
            nome = "Paris"
            descricao = "A cidade luz"
        />
    );
    const nome = screen.getByText("Paris");
    const descricao = screen.getByText("A cidade luz")

    expect(nome).toBeInTheDocument();
    expect(descricao).toBeInTheDocument();
});