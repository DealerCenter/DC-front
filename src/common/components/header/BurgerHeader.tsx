import React from "react";
import styled from "styled-components";

type Props = {};

const BurgerHeader = (props: Props) => {
  return (
    <Container>
      <Frame>
        <Logo>DUX</Logo>
        <Item>B</Item>
        {/* ამაზე აღარ ვიწვალე, რომ გავარკვევთ მერე დავამთავრებ  */}
      </Frame>
    </Container>
  );
};

export default BurgerHeader;

const Container = styled.div`
  width: 100vw;
  padding: 4px 16px 4px 16px;
`;

const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px 12px 0px;
`;

const Logo = styled.h2`
  color: rgba(0, 0, 0, 1);
  font-size: 40px;
  font-weight: bold;
  padding: 12px 16px 12px 16px;
  margin: 0;
`;

const Item = styled.div`
  height: 18px;
  width: 12px;
  color: rgba(52, 64, 84, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;
