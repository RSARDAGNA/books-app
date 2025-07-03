import styled from 'styled-components';

export const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: ${(props) => props.cor || "#000"};/*se nao tiver a prop, usa a segunda opcao depois de ||*/
  font-size: ${(props) => props.tamanhoFonte || "18px"};
  text-align: ${(props) => props.alinhamento || "center"};
  margin: 0;
`;