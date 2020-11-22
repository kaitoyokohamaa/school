import React, { useEffect, useState } from "react";
import Header from "../../Organisms/Header";
import firebase from "../../../firebase";
import HomeDetailCard from "../../Organisms/HomeDetailCards";
import { Row, Col } from "antd";
import Post from "../../Organisms/PostModal";
import { firebasePostContents } from "../../Organisms/PostModal";
import { HomeDiv } from "../Home";
type boardsList = {
  contentList: firebasePostContents;
};
export default function Index(props: any) {
  const [bords, setBoards] = useState<firebase.firestore.DocumentData>([]);

  useEffect(() => {
    const boardId = props.match.params.boardId;
    const db = firebase.firestore();
    const ref = db.collection("board");
    let doBoardArray: firebase.firestore.DocumentData = [];
    ref
      .doc(boardId)
      .onSnapshot(async (boards: firebase.firestore.DocumentData) => {
        await doBoardArray.push({ contentList: boards.data() });
        setBoards(doBoardArray);
      });
  }, [props.match.params.boardId]);

  return (
    <>
      <Header />
      <HomeDiv>
        <Row>
          <Col span={24}>
            {bords &&
              bords.map((boardFields: boardsList) => (
                <div key={boardFields.contentList.name}>
                  <HomeDetailCard
                    name={boardFields.contentList.name}
                    time={boardFields.contentList.createdAt}
                    body={boardFields.contentList.body}
                  />
                </div>
              ))}
          </Col>
        </Row>
      </HomeDiv>
    </>
  );
}
