import IconesHeader from "../IconesHeader";
import OpcoesHeader from "../OpcoesHeader";
import Logo from "../Logo";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const HeaderComponent = styled.header`

    background-color: #fff;
    display: flex;
    justify-content: center;

`;

function Header(){
  return (
    <HeaderComponent>
      <Link to="/">
        <Logo />
      </Link>
      <OpcoesHeader />
      <IconesHeader />
    </HeaderComponent>
  );
}

export default Header;