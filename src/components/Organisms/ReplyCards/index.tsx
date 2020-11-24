import React, { FC } from "react";
import { Card } from "antd";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 30px 10px 10px;
  background-color: #ffbcbc;
  margin-top: 142px;
`;
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
          border: "0",
          borderRadius: "5px",
        }}
      >
        <Body>{body}</Body>
        <Name>{name}</Name>
      </Card>
    </Wrapper>
  );
};
export default Index;
