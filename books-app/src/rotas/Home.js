import styled from "styled-components";
import Pesquisa from "../componentes/Pesquisa";
import UltimosLancamentos from "../componentes/UltimosLancamentos";

const AppContainer = styled.div`
  width: 100vw; /*vw: view widht */
  height: 100vh; /*vh: view height */
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;
