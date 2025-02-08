import { useEffect, useRef, useState } from "react";
import { ClickCounter, EggContainer, EggQuote, EggStyled } from "./Egg.styles.ts";
import { JSX } from "react/jsx-runtime";
import { EggProps } from "./Egg.types.ts";
import { onClick } from "./Egg.methods.ts";
import Link from "next/link";



const Egg: React.FC<EggProps> = ({ clicks, actualQuote, quotes }): JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [, setEndAnimation] = useState<boolean>(false);

    useEffect(() => {
        onClick(videoRef, clicks, setEndAnimation);
    }, [clicks]);

    return <EggContainer >
        <EggStyled
            ref={videoRef}
            src="/egg-cracking.mp4"
            width={300}
            height={300}
            muted
            playsInline
        />
        <ClickCounter className="clicks">
            {clicks}
        </ClickCounter>

        <EggQuote>
            {actualQuote > 0 ? quotes[actualQuote] : ""}
        </EggQuote>
        {
            clicks == 100 ?
                <Link href={"/"}>
                    Go to home
                </Link> :
                ""
        }



    </EggContainer>
}

export default Egg;