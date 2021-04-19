import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderList = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const Header = () => {
  return (
    <HeaderList backgroundColor='blue'>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/login/10'>로그인</Link>
        </li>
      </ul>
    </HeaderList>
  );
};

export default Header;
