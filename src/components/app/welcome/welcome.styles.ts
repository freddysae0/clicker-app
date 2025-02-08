import { motion } from "framer-motion";
import styled from "styled-components";

export const WelcomeContainer = styled.div`
    min-height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const WelcomeCard = styled(motion.div)`
    margin-left: 24px;
    padding: 20px;
    border-radius: 16px;
    max-width: 500px;
    width: 100%;
`
export const WelcomeTitle = styled.h1`
    font-size: 48px;
    font-weight: 900;
    color: black;
    margin-bottom: 16px;
`
export const WelcomeDescription = styled.p`
    font-size: 20px;
    color: black;
    margin-bottom: 32px;
`
export const WelcomeButton = styled.button`
    padding: 12px 24px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: black;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: #333;
        transform: scale(0.95);
    }


`