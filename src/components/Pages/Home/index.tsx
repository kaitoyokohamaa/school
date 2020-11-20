import React, { useEffect, useState } from "react";
import Card from "../../Organisms/Cards";
import Post from "../../Organisms/PostModal";
import MoreButton from "../../Atoms/MoreButton";
import { Row, Col } from "antd";
import styled from "styled-components";
import Header from "../../Organisms/Header";
import firebase from "../../../firebase";
import { firebasePostContents } from "../../Organisms/PostModal";
const HomeDiv = styled.div`
  background-color: #fff;
  width: 1000px;
  margin-top: 50px;
  margin: 0 auto;
  padding: 50px 0;
`;
const ButtonWrapper = styled.div`
  text-align: center;
  width: 600px;
  margin-top: 24px;
`;

export default function Index() {
  const [bords, setBoards] = useState<firebase.firestore.DocumentData>([]);
  useEffect(() => {
    const db = firebase.firestore();
    const chatRef = db.collection("board");
    chatRef.onSnapshot((boards) => {
      let boardContents: firebase.firestore.DocumentData = [];
      boards.forEach((contents) => {
        boardContents.push(contents.data());
      });
      setBoards(boardContents);
    });
  }, []);

  return (
    <>
      <Header />
      <HomeDiv>
        <Row>
          <Col span={8}>
            <Post />
          </Col>
          <Col span={16}>
            {bords &&
              bords.map((boardFields: firebasePostContents) => (
                <Card
                  key={boardFields.body}
                  title={boardFields.title}
                  body={boardFields.body}
                />
              ))}

            <ButtonWrapper>
              {bords && bords.length > 6 && <MoreButton />}
            </ButtonWrapper>
          </Col>
        </Row>
      </HomeDiv>
    </>
  );
}
