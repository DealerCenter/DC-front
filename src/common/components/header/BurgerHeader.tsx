import Image from "next/image";
import React from "react";
import styled from "styled-components";
import search from "@/assets/icons/search.svg";

type Props = {};

const BurgerHeader = (props: Props) => {
  return (
    <Container>
      <Logo>DUX</Logo>
      <Frame>
        <Item>
          <Label>
            <Image height={20} width={20} src={search} alt="search icon" />
          </Label>
        </Item>
        <Item>
          <Label>P</Label>
        </Item>
        <Item>
          <Label>=</Label>
        </Item>
        {/* ამაზე აღარ ვიწვალე, რომ გავარკვევთ მერე დავამთავრებ  */}
      </Frame>
    </Container>
  );
};

export default BurgerHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 8px;
  background-color: rgba(18, 18, 20, 1);
  width: 355px;
  margin: 10px auto;
  border-radius: 16px;
  min-height: 52px;
`;

const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  gap: 6px;
`;

const Logo = styled.h2`
  color: white;
  font-size: 23px;
  font-weight: bold;
  padding: 12px 8px 12px 8px;
  margin: 0;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 2px solid rgba(255, 255, 255, 0.24);
  border-radius: 12px;
`;

const Label = styled.label`
  color: white;
  font-size: 16px;
`;

const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;
