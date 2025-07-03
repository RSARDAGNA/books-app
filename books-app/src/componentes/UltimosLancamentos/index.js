import { livros } from "./dadosUltimosLancamentos";
import styled from "styled-components";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from "../../imagens/livro2.png";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

const LivroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 140px;

  p {
    word-wrap: break-word;
    white-space: normal;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;


function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#eb9b00" tamanhoFonte="36px" alinhamento="center">
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <LivroContainer>
            <img alt={livro.nome} src={livro.src} />
            <p>{livro.nome}</p>
          </LivroContainer>
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
