import React, { useEffect, useState } from "react";
import Header from "../../Organisms/Header";
import firebase from "../../../firebase";
import HomeDetailCard from "../../Organisms/HomeDetailCards";
import { Row, Col } from "antd";
import Reply from "../../Organisms/ReplyModal";
import { firebasePostContents } from "../../Organisms/PostModal";
import { HomeDiv } from "../Home";
import ReplyCards from "../../Organisms/ReplyCards";
import { ReplyFields } from "../../Organisms/ReplyCards";
import styled from "styled-components";
const Wrapper = styled.div`
  margin: 0 148px;
`;
type boardsList = {
  contentList: firebasePostContents;
};
export default function Index(props: any) {
  const [bords, setBoards] = useState<firebase.firestore.DocumentData>([]);
  const [replys, setReplys] = useState<firebase.firestore.DocumentData>([]);
  const boardId = props.match.params.boardId;
  const db = firebase.firestore();
  const ref = db.collection("board");
  useEffect(() => {
    let doBoardArray: firebase.firestore.DocumentData = [];
    ref
      .doc(boardId)
      .onSnapshot(async (boards: firebase.firestore.DocumentData) => {
        await doBoardArray.push({ contentList: boards.data() });
        setBoards(doBoardArray);
      });
  }, [props.match.params.boardId]);

  useEffect(() => {
    let doReplyArray: firebase.firestore.DocumentData = [];
    ref
      .doc(boardId)
      .collection("reply")
      .orderBy("createdAt", "asc")
      .onSnapshot((res) => {
        res.forEach(async (reply) => {
          await doReplyArray.push(reply.data());
        });
        setReplys(doReplyArray);
      });
  }, []);

  return (
    <>
      <Header />
      <HomeDiv>
        <Row>
          <Col span={24}>
            {bords &&
              bords.map((boardFields: boardsList) => (
                <Wrapper key={boardFields.contentList.name}>
                  <HomeDetailCard
                    name={boardFields.contentList.name}
                    time={boardFields.contentList.createdAt}
                    body={boardFields.contentList.body}
                  />
                  <Reply boardId={boardId} />
                </Wrapper>
              ))}
            {replys.length
              ? replys.map((replyFields: ReplyFields) => (
                  <ReplyCards name={replyFields.name} body={replyFields.body} />
                ))
              : // todo 返信がない場合の処理を書く
                console.log(replys)}
          </Col>
        </Row>
      </HomeDiv>
    </>
  );
}
