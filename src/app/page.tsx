'use client';
/* WELCOME PAGE */

import { JSX } from "react/jsx-runtime";
import { WelcomeButton, WelcomeCard, WelcomeContainer, WelcomeDescription, WelcomeTitle } from "@/components/app/welcome/welcome.styles";
import Link from "next/link";

const Home: React.FC = (): JSX.Element => {
  return (
    <WelcomeContainer >
      <WelcomeCard
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="card"
      >
        <WelcomeTitle>Welcome!</WelcomeTitle>
        <WelcomeDescription>I have an egg for you. Let&apos;s get started!</WelcomeDescription>

        <Link style={{ marginRight: "15px" }} href={"game"}>
          <WelcomeButton>
            Get an egg
          </WelcomeButton>
        </Link>

        <Link href={"about"}>
          <WelcomeButton>
            History
          </WelcomeButton>
        </Link>
      </WelcomeCard>
    </WelcomeContainer>
  );
};

export default Home;
