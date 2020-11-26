import React, { useEffect, useState, FC } from "react";
import Card from "../../Organisms/Cards";
import Post from "../../Organisms/PostModal";
import MoreButton from "../../Atoms/MoreButton";
import { Row, Col } from "antd";
import styled from "styled-components";
import Header from "../../Organisms/Header";
import firebase from "../../../firebase";
import { firebasePostContents } from "../../Organisms/PostModal";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
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
const ButtonWrapper = styled.div`
  text-align: center;
  width: 600px;
  margin-top: 24px;
`;
const SpButtonWrapper = styled.div`
  text-align: center;
  margin-top: 24px;
`;

const Index: FC = () => {
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

  return (
    <>
      <Header />
      <MediaQuery minDeviceWidth={768}>
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
      </MediaQuery>
      <MediaQuery maxDeviceWidth={767}>
        <Row>
          <Col span={24}>
            <Post />
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

            <SpButtonWrapper onClick={handleMore}>
              {sliceBoards && sliceBoards.length < 6 && <MoreButton />}
            </SpButtonWrapper>
          </Col>
        </Row>
      </MediaQuery>
    </>
  );
};

export default Index;
