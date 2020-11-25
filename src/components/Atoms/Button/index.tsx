import React, { FC } from "react";
import { Button } from "antd";

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
const index: FC<Props> = (props) => {
  return (
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
  );
};
export default index;
