import { EggOnClick } from "./Egg.types";


export const onClick: EggOnClick = (videoRef, clicks, setEndAnimation): void => {
    if (videoRef.current) {
        const progress = Math.min(clicks / 100, 1);
        const duration = videoRef.current.duration || 0;
        if (progress === 100) {
            videoRef.current.pause();
            setEndAnimation(true);
            return
        }
        videoRef.current.currentTime = progress * duration;
    }
}
