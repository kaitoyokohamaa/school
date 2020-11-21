import React, { useEffect, useState } from "react";
import Header from "../../Organisms/Header";
import firebase from "../../../firebase";
import Card from "../../Organisms/Cards";
import { Row, Col } from "antd";
import Post from "../../Organisms/PostModal";
import { firebasePostContents } from "../../Organisms/PostModal";
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
        await doBoardArray.push(boards.data());
      });
    if (doBoardArray.length !== []) {
      setBoards(doBoardArray);
    }
  }, [props.match.params.boardId]);

  return (
    <>
      <Header />
      <Row>
        <Col span={8}>
          <Post />
        </Col>
        <Col span={16}>
          {bords.length > 0 &&
            bords.map((boardFields: firebasePostContents) => (
              <div key={boardFields.name}>
                <Card title={boardFields.title} body={boardFields.body} />
              </div>
            ))}
        </Col>
      </Row>
    </>
  );
}
