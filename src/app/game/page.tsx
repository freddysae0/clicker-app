"use client";
import Egg from "@/components/app/game/egg/Egg";
import { getDonaldQuotes } from "@/components/app/game/game.methods";
import { GameContainer } from "@/components/app/game/game.styles";
import { useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";


const Home: React.FC = (): JSX.Element => {
  const [clicksAmmount, setClickAmmount] = useState<number>(0)
  const [donaldQuotes, setDonaldQuotes] = useState<string[]>([])
  const addClick = (): void => {
    setClickAmmount((prev) => prev + 1 > 100 ? prev : prev + 1)
  }
  const updateQuotes = async (): Promise<void> => {
    const quotes = await getDonaldQuotes();
    setDonaldQuotes(quotes);
  }
  useEffect(() => {
    updateQuotes()
  }, [])

  return (
    <GameContainer onClick={addClick}>
      <div>
        <Egg clicks={clicksAmmount} actualQuote={Math.floor(clicksAmmount / 20)} quotes={donaldQuotes}></Egg>

      </div>

    </GameContainer>
  );
}


export default Home;
