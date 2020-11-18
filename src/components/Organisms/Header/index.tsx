import React from "react";
import Logo from "../../Atoms/Img";
import styled from "styled-components";
const LogoWrapper = styled.div`
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  height: 60px;
  line-height: 1.5em;
  margin-bottom: 20px;
`;
const LogoParagraph = styled.p`
  color: #fa6868;
  font-family: monospace;
  font-size: 22px;
  padding-top: 18px;
  padding-left: 10px;
`;

export default function index() {
  return (
    <LogoWrapper>
      <Logo />
      <LogoParagraph>ゼミプロジェクト</LogoParagraph>
    </LogoWrapper>
  );
}
