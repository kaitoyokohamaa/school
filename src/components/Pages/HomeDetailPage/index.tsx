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
import MediaQuery from "react-responsive";
const HomeDetailCardWrapper = styled.div`
  margin: 0 148px;
`;
const SpHomeDetailCardWrapper = styled.div``;
const ReplyArea = styled.h2`
background-color: #e7e7e7;
  border:1px solid #e7e7e7
  color: #676767;
  font-weight: bold;
  padding: 10px;
  font-size: 13px;
  width:65%;
  margin: 0 auto;
  margin-top:24px;
`;
const SpReplyArea = styled.h2`
background-color: #e7e7e7;
  border:1px solid #e7e7e7
  color: #676767;
  font-weight: bold;
  padding: 10px;
  font-size: 13px;
  width:100%;
  margin: 0 auto;
  margin-top:24px;
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
      <MediaQuery minDeviceWidth={768}>
        <HomeDiv>
          <Row>
            <Col span={24} style={{ backgroundColor: "#ffff" }}>
              {bords &&
                bords.map((boardFields: boardsList) => (
                  <HomeDetailCardWrapper key={boardFields.contentList.name}>
                    <HomeDetailCard
                      name={boardFields.contentList.name}
                      time={boardFields.contentList.createdAt}
                      body={boardFields.contentList.body}
                    />
                    <Reply boardId={boardId} />
                  </HomeDetailCardWrapper>
                ))}
              <div>
                <ReplyArea>回答</ReplyArea>
                {replys.length ? (
                  replys.map((replyFields: ReplyFields) => (
                    <ReplyCards
                      name={replyFields.name}
                      body={replyFields.body}
                    />
                  ))
                ) : (
                  // todo 返信がない場合の処理を書く
                  <p>回答はまだありません</p>
                )}
              </div>
            </Col>
          </Row>
        </HomeDiv>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={767}>
        <Row>
          <Col span={24} style={{ backgroundColor: "#ffff" }}>
            {bords &&
              bords.map((boardFields: boardsList) => (
                <SpHomeDetailCardWrapper key={boardFields.contentList.name}>
                  <HomeDetailCard
                    name={boardFields.contentList.name}
                    time={boardFields.contentList.createdAt}
                    body={boardFields.contentList.body}
                  />
                  <Reply boardId={boardId} />
                </SpHomeDetailCardWrapper>
              ))}
            <div>
              <SpReplyArea>回答</SpReplyArea>
              {replys.length ? (
                replys.map((replyFields: ReplyFields) => (
                  <ReplyCards name={replyFields.name} body={replyFields.body} />
                ))
              ) : (
                // todo 返信がない場合の処理を書く
                <p>回答はまだありません</p>
              )}
            </div>
          </Col>
        </Row>
      </MediaQuery>
    </>
  );
}
