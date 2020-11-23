import React, { FC } from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import styled from "styled-components";
import firebase from "../../../firebase";
const Name = styled.p`
  color: #fa6868;
  font-size: 105%;
`;
const Time = styled.p`
  font-size: 11px;
  color: #999;
`;
const Replay = styled.p`
display: inline-block;
padding-left: 18px;
border-bottom: 1px solid #f78789;
vertical-align: bottom;
text-decoration: none;
color: #f78789;
background-size: 16px 16px;
`;

const Body = styled.p``;
type Props = {
  name: string;
  body: string;
  time: firebase.firestore.Timestamp;
};

const Index: FC<Props> = ({ body, name, time }) => {
  const CurrentHours = time.toDate().getHours();
  const CurrentMinutes = time.toDate().getMinutes();
  return (
    <Card
      style={{
        width: 650,
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #d2d1d1",
      }}
    >
      <Name>{name}</Name>
      <Time>{`${CurrentHours}時${CurrentMinutes}分`}</Time>

      <Body>{body}</Body>
      <Replay>スレに返信</Replay>
    </Card>
  );
};
export default Index;
