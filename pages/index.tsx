import React, { PropsWithChildren, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Particles from "../components/Particles";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import { COLOR_NAMES, getRandomColor } from "../constants";
import { animated, useSpring } from "@react-spring/web";

interface HeaderTextProps {
  color: string;
}
interface CardProps {
  index: number;
}
interface SlideOpenProps {
  focused: boolean;
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 200;
  align-items: flex-end;
  justify-content: center;
  color: var(--green);
  font-size: 19vw;
  line-height: 19vw;
  user-select: none;
`;
const HeaderText = styled.div(
  ({ color }: HeaderTextProps) => `
  z-index: 0;
  height: 19vw;
  margin: 0;
  padding: 0;
  color: ${color}
`
);

const GreyScaleImage = styled(Image)`
  position: fixed;
  top: 0;
  left: 0;
  filter: grayscale(1);
`;

const Cover = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 38vw;
  left: 0;
  bottom: 0%;
  right: 0;
  background-color: white;
  zindex: 5;
`;

const Card = styled.div(
  ({ index }: CardProps) => `
  background-color: var(--${COLOR_NAMES[index]});
  height: 100%;
  width: 100%;
  display: flex;  
  `
);

const SlideOpen = ({
  focused,
  children,
}: PropsWithChildren<SlideOpenProps>) => {
  const styles = useSpring({
    display: "flex",
    height: "100%",
    flexGrow: 1,
    width: focused ? "76%" : "3%",
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

const Home: NextPage = () => {
  const [focusedCard, setFocusedCard] = useState(-1);
  const randomColor = getRandomColor();

  return (
    <div className={styles.container}>
      <Head>
        <title>Jordan Cardwell</title>
        <meta name="description" content="A place to put things" />
      </Head>
      {/* <Document></Document> */}
      <Particles />
      {/* <GreyScaleImage src="head.png" width="19vh" height="30vh" /> */}
      <Header onClick={() => setFocusedCard(-1)}>
        <HeaderText color={randomColor}>JORDAN</HeaderText>
        <HeaderText color={randomColor}>CARDWELL</HeaderText>
      </Header>
      <Cover>
        {COLOR_NAMES.map((_, index) => {
          return (
            <SlideOpen key={index} focused={index === focusedCard}>
              <Card index={index} onClick={() => setFocusedCard(index)}></Card>
            </SlideOpen>
          );
        })}
      </Cover>
    </div>
  );
};

export default Home;
