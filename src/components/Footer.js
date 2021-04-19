import React from "react";
import styled from "styled-components";

const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <FooterList>
      <ul>
        <li>오시는길: 서울 종로구</li>
        <li>전화번호: 02-123-1234</li>
      </ul>
    </FooterList>
  );
};

export default Footer;
