import React from "react";
import Logo from "../../../Img/baby.jpeg";
import styled from "styled-components";

const LogoStyle = styled.img`
  width: 80px;
  border-radius: 50%;
  padding-left: 18px;
`;
export default function index() {
  return (
    <>
      <LogoStyle src={Logo} />
    </>
  );
}
