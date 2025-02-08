import { styled } from "styled-components";


export const EggContainer = styled.div`
    position: relative;
    transition: all 0.3s ease-in-out;
    `
export const EggStyled = styled.video`
    transition: all 0.3s ease-in-out;
    
    `
export const ClickCounter = styled.div`
    position: absolute;
    top: 0px;
    right: 10px;
    font-size: 28px;
    font-weight: bold;
    color: black;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
    `

export const EggQuote = styled.div`
    pointer-events: none;
    transition: all 0.3s ease-in-out;
    max-width: 600px;
    font-size: 28px;
    font-weight: bold;
    color: brown;
    z-index: 1;
`

