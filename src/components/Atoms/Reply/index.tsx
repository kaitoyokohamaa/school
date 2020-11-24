import React, { FC } from "react";
import styled from "styled-components";
import { SendOutlined } from "@ant-design/icons";
const Wrapper = styled.div`
  display: inline-block;
  border-bottom: 1px solid #f78789;
  vertical-align: bottom;
  text-decoration: none;
  color: #f78789;
  background-size: 16px 16px;
`;
const Replay = styled.a`
  text-decoration: none;
  color: #f78789;
`;
type Props = {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
const Index: FC<Props> = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <Replay>
        <SendOutlined />
        回答する
      </Replay>
    </Wrapper>
  );
};

export default Index;
