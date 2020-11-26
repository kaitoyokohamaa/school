import React, { FC } from "react";
import { Button } from "antd";
import MediaQuery from "react-responsive";
import styled from "styled-components";
type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
const SpPostButton = styled.button`
  position: fixed;
  right: 10px;
  bottom: 20px;
  z-index: 200;
  width: 30%;
  border: 1px solid #fa6868;
  border-radius: 28px;
  color: #ffff;
  background: #fa6868;
  text-align: center;
  padding: 20px;
`;
const index: FC<Props> = (props) => {
  return (
    <>
      <MediaQuery minDeviceWidth={768}>
        <Button
          style={{
            margin: "22px 0 0 20px",
            padding: "20px 10px 40px 10px",
          }}
          type="dashed"
          danger
          shape="round"
          onClick={props.onClick}
        >
          質問を投稿する
        </Button>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={767}>
        <SpPostButton onClick={props.onClick}>投稿する</SpPostButton>
      </MediaQuery>
    </>
  );
};
export default index;
