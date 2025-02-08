import styled from "styled-components";

// Estilos con Styled Components
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: #333;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  margin-bottom: 30px;
  text-align: center;

`;

export const EggImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const StartButton = styled.button`
  background-color:black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: aliceblue;
    color: black;
  }
  margin-bottom: 120px;

`;

export const GoBackButton = styled.button`
  background-color:gray;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: aliceblue;
    color: black;
  }
  margin-bottom: 120px;

`;