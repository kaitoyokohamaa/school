import React from "react";
import Card from "../../Organisms/Cards";
import Button from "../../Atoms/Button";
import MoreButton from "../../Atoms/MoreButton";
import { Row, Col } from "antd";
import styled from "styled-components";
import Header from "../../Organisms/Header";
const HomeDiv = styled.div`
  background: #f7f7f7;
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
  return (
    <>
      <Header />
      <HomeDiv>
        <Row>
          <Col span={8}>
            {" "}
            <Button />
          </Col>
          <Col span={16}>
            <Card
              title={"子供に話しかけてくる他人って迷惑？"}
              body={
                "子供と出掛けると知らない人に話しかけられたりします。子供は挨拶は自分からしたり相手にされたらちゃんとしますが、何か質問されると内容によっては黙ってしまいます。私も人と話すのが苦手なので、知らない人にいきなり話しかけられてびっくりしてるのもあると思いますが…"
              }
            />
            <Card
              title={"子供に話しかけてくる他人って迷惑？"}
              body={
                "子供と出掛けると知らない人に話しかけられたりします。子供は挨拶は自分からしたり相手にされたらちゃんとしますが、何か質問されると内容によっては黙ってしまいます。私も人と話すのが苦手なので、知らない人にいきなり話しかけられてびっくりしてるのもあると思いますが…"
              }
            />
            <Card
              title={"子供に話しかけてくる他人って迷惑？"}
              body={
                "子供と出掛けると知らない人に話しかけられたりします。子供は挨拶は自分からしたり相手にされたらちゃんとしますが、何か質問されると内容によっては黙ってしまいます。私も人と話すのが苦手なので、知らない人にいきなり話しかけられてびっくりしてるのもあると思いますが…"
              }
            />
            <Card
              title={"子供に話しかけてくる他人って迷惑？"}
              body={
                "子供と出掛けると知らない人に話しかけられたりします。子供は挨拶は自分からしたり相手にされたらちゃんとしますが、何か質問されると内容によっては黙ってしまいます。私も人と話すのが苦手なので、知らない人にいきなり話しかけられてびっくりしてるのもあると思いますが…"
              }
            />
            <Card
              title={"子供に話しかけてくる他人って迷惑？"}
              body={
                "子供と出掛けると知らない人に話しかけられたりします。子供は挨拶は自分からしたり相手にされたらちゃんとしますが、何か質問されると内容によっては黙ってしまいます。私も人と話すのが苦手なので、知らない人にいきなり話しかけられてびっくりしてるのもあると思いますが…"
              }
            />
            <ButtonWrapper>
              <MoreButton />
            </ButtonWrapper>
          </Col>
        </Row>
      </HomeDiv>
    </>
  );
}
