import React, { useState, FC } from "react";
import { Modal, Input, Button } from "antd";
import styled from "styled-components";
import Reply from "../../Atoms/Reply";
import firebase from "../../../firebase";
import MediaQuery from "react-responsive";
export type firebasePostContents = {
  name: string;
  body: string;
  createdAt: firebase.firestore.Timestamp;
};

type props = {
  boardId: string;
};
const Wrapper = styled.div`
  text-align: right;
  margin-right: 14px;
`;

const Index: FC<props> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const { TextArea } = Input;
  const db = firebase.firestore();
  const boardId = props.boardId;
  const ref = db.collection("board");
  console.log(ref);
  console.log(boardId);
  const H3 = styled.h3``;
  const doReply = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    const boardContents: firebasePostContents = {
      name,
      body,
      createdAt: firebase.firestore.Timestamp.now(),
    };
    if (name && body) {
      ref.doc(boardId).collection("reply").add(boardContents);
      setModalVisible(false);
    } else {
      alert("文字を入力してください");
    }
  };
  return (
    <Wrapper>
      <MediaQuery minDeviceWidth={768}>
        <Reply onClick={doReply} />
        <Modal
          title="質問に回答する"
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          width="40%"
          footer={[
            <Button key="back" onClick={() => setModalVisible(false)}>
              キャンセル
            </Button>,
            <Button key="submit" type="default" onClick={handleOk}>
              投稿する
            </Button>,
          ]}
        >
          <H3>名前</H3>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="名前"
            required
          />
          <H3>回答する</H3>
          <TextArea
            onChange={(e) => setBody(e.target.value)}
            placeholder="回答するぜ"
            required
            rows={4}
          />
        </Modal>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={767}>
        <Reply onClick={doReply} />
        <Modal
          title="質問に回答する"
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          width="80%"
          footer={[
            <Button key="back" onClick={() => setModalVisible(false)}>
              キャンセル
            </Button>,
            <Button key="submit" type="default" onClick={handleOk}>
              投稿する
            </Button>,
          ]}
        >
          <H3>名前</H3>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="名前"
            required
          />
          <H3>回答する</H3>
          <TextArea
            onChange={(e) => setBody(e.target.value)}
            placeholder="回答するぜ"
            required
            rows={4}
          />
        </Modal>
      </MediaQuery>
    </Wrapper>
  );
};
export default Index;
