import { Dispatch, RefObject, SetStateAction } from "react";

export type EggProps = {
    clicks: number,
    actualQuote: number,
    quotes: string[],
}
export type EggOnClick = (videoRef: RefObject<HTMLVideoElement | null>, clicks: number, setEndAnimation: Dispatch<SetStateAction<boolean>>) => void

