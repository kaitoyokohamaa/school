import React, { useState } from "react";
import { Modal, Input, Button } from "antd";
import styled from "styled-components";
import PostButton from "../../Atoms/Button";
import firebase from "../../../firebase";

export type firebasePostContents = {
  name: string;
  title: string;
  body: string;
  createdAt: firebase.firestore.FieldValue;
};
export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { TextArea } = Input;
  const H3 = styled.h3``;
  const doPosts = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    const boardContents: firebasePostContents = {
      name,
      title,
      body,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    firebase.firestore().collection("board").add(boardContents);
    setModalVisible(false);
  };
  return (
    <div>
      <PostButton onClick={doPosts} />
      <Modal
        title="スレッドを立ててみる"
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
        <H3>タイトル</H3>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="タイトル"
          required
        />
        <H3>相談内容</H3>
        <TextArea
          onChange={(e) => setBody(e.target.value)}
          placeholder="相談内容"
          required
          rows={4}
        />
      </Modal>
    </div>
  );
}
