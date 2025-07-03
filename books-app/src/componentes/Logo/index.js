import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImg = styled.img`
  margin-right: 10px;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo"/>
      <p>
        <strong>Books</strong> App
      </p>
    </LogoContainer>
  );
}

export default Logo;
