import React, { FC } from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import styled from "styled-components";

const TitleH2 = styled.h2`
  color: #fa6868;
`;
const Body = styled.p``;
type Props = {
  title: string;
  body: string;
};

const Index: FC<Props> = ({ title, body }) => {
  return (
    <Card
      hoverable
      style={{ width: 600, marginTop: "20px", border: "1px solid #d2d1d1" }}
    >
      <TitleH2>{title}</TitleH2>
      <Body>{body}</Body>
    </Card>
  );
};
export default Index;
