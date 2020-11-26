import React, { FC } from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import styled from "styled-components";
import firebase from "../../../firebase";
import MediaQuery from "react-responsive";
const Name = styled.p`
  color: #fa6868;
  font-size: 105%;
`;
const Time = styled.p`
  font-size: 11px;
  color: #999;
`;

const Body = styled.p``;
type Props = {
  name: string;
  body: string;
  time: firebase.firestore.Timestamp;
};

const Index: FC<Props> = ({ body, name, time }) => {
  const CurrentYear = time.toDate().getFullYear();
  const CurrentMonth = time.toDate().getMonth() + 1;
  const CurrentDay = time.toDate().getDay() + 22;
  return (
    <>
      <MediaQuery minDeviceWidth={768}>
        <Card
          style={{
            width: 650,
            margin: "0 auto",
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #d2d1d1",
          }}
        >
          <Name>{name}</Name>
          <Time>{`${CurrentYear}年${CurrentMonth}月${CurrentDay}日`}</Time>
          <Body>{body}</Body>
        </Card>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={767}>
        <Card
          style={{
            width: "100%",
            margin: "0 auto",
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #d2d1d1",
          }}
        >
          <Name>{name}</Name>
          <Time>{`${CurrentYear}年${CurrentMonth}月${CurrentDay}日`}</Time>
          <Body>{body}</Body>
        </Card>
      </MediaQuery>
    </>
  );
};
export default Index;
