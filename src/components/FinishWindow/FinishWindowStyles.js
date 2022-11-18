import styled from "styled-components";


export const FinishWindowContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes popUpAnim {
    0% {
      opacity: 0%;
    }
    40% {
      opacity: 0%;
    }
    100% {
      opacity: 1;
    }
  }
  animation: popUpAnim 1.5s;
`;

export const ModalContainer = styled.div`
  height: 50%;
  width: 50%;
  border-radius: 40px;
  background-color: white;
  opacity: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BackgroundContainer = styled.div`
  background-color: #040D1C;
  opacity: 40%;
  height: 100%;
  width: 100%;
  position: fixed;
`;

export const ButtonContainer = styled.button`
  padding: 15px;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  background-color: #560cc1;
  cursor: pointer;
`;

export const TextContainer = styled.p`
  width: 70%;
  margin-bottom: 50px;
  font-size: 24px;
`;