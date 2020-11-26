import React, { FC } from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import styled from "styled-components";

import MediaQuery from "react-responsive";
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
    //PC担当
    <>
      <MediaQuery minDeviceWidth={768}>
        <Card
          hoverable
          style={{ width: 600, marginTop: "20px", border: "1px solid #d2d1d1" }}
        >
          <TitleH2>{title}</TitleH2>
          <Body>{body}</Body>
        </Card>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={767}>
        <Card
          hoverable
          style={{
            width: "100%",
            borderBottom: "1px solid #d2d1d1",
          }}
        >
          <TitleH2>{title}</TitleH2>
          <Body>{body}</Body>
        </Card>
      </MediaQuery>
    </>
  );
};
export default Index;
