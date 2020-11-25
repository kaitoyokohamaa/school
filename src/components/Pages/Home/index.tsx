import React, { useEffect, useState } from "react";
import Card from "../../Organisms/Cards";
import Post from "../../Organisms/PostModal";
import MoreButton from "../../Atoms/MoreButton";
import { Row, Col } from "antd";
import styled from "styled-components";
import Header from "../../Organisms/Header";
import firebase from "../../../firebase";
import { firebasePostContents } from "../../Organisms/PostModal";
import { Link } from "react-router-dom";

type boardsList = {
  boardIds: string;
  contentList: firebasePostContents;
};
export const HomeDiv = styled.div`
  background-color: #fff;
  width: 1000px;
  margin-top: 50px;
  margin: 0 auto;
  padding: 50px 0;
`;
export const ButtonWrapper = styled.div`
  text-align: center;
  width: 600px;
  margin-top: 24px;
`;

export default function Index() {
  const [bords, setBoards] = useState<firebase.firestore.DocumentData>([]);
  const [
    sliceBoards,
    setSliceBoards,
  ] = useState<firebase.firestore.DocumentData>([]);
  let sliceBoardsArray: firebase.firestore.DocumentData = [];
  useEffect(() => {
    const db = firebase.firestore();
    const ref = db.collection("board");
    ref.orderBy("createdAt", "desc").onSnapshot((boards) => {
      let boardContents: firebase.firestore.DocumentData = [];

      boards.forEach((contents) => {
        boardContents.push({
          boardIds: contents.id,
          contentList: contents.data(),
        });
      });
      setBoards(boardContents);
      if (boardContents.length > 0) {
        sliceBoardsArray = boardContents.slice(0, 5);
        setSliceBoards(sliceBoardsArray);
      }
    });
  }, []);

  const handleMore = () => {
    sliceBoardsArray = bords;
    setSliceBoards(sliceBoardsArray);
  };
  console.log(sliceBoardsArray);
  return (
    <>
      <Header />
      <HomeDiv>
        <Row>
          <Col span={8}>
            <Post />
          </Col>
          <Col span={16}>
            {sliceBoards.length > 0 &&
              sliceBoards.map((boardFields: boardsList) => (
                <div key={boardFields.boardIds}>
                  <Link to={`/home/${boardFields.boardIds}`}>
                    <Card
                      title={boardFields.contentList.title}
                      body={boardFields.contentList.body}
                    />
                  </Link>
                </div>
              ))}

            <ButtonWrapper onClick={handleMore}>
              {sliceBoards && sliceBoards.length < 6 && <MoreButton />}
            </ButtonWrapper>
          </Col>
        </Row>
      </HomeDiv>
    </>
  );
}
