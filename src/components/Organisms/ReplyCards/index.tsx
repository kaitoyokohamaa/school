import React, { FC } from "react";
import { Card } from "antd";
import styled from "styled-components";
const Wrapper = styled.div``;
const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
const Name = styled.p`
  color: #fa6868;
  font-size: 105%;
`;

const Body = styled.p``;

export type ReplyFields = {
  name: string;
  body: string;
};
const Index: FC<ReplyFields> = ({ name, body }) => {
  return (
    <Wrapper>
      <Card
        style={{
          width: 650,
          margin: "0 auto",
          padding: "20px",
          border: "1px solid rgb(210, 209, 209)",
        }}
      >
        <Body>{body}</Body>
        <Name>{name}</Name>
      </Card>
    </Wrapper>
  );
};
export default Index;
