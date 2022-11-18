import {
  BackgroundContainer,
  ButtonContainer,
  FinishWindowContainer,
  ModalContainer,
  TextContainer,
} from "./FinishWindowStyles";

const FinishWindow = ({ isWordCorrect }) => {
  return (
    <FinishWindowContainer>
      <BackgroundContainer />
      <ModalContainer>
        {isWordCorrect ? (
          <TextContainer>Congratulations, you've guessed the correct word!</TextContainer>
        ) : (
          <TextContainer>You didn't guess the correct word, try again.</TextContainer>
        )}
        <ButtonContainer onClick={() => window.location.reload()} >
            Try again
        </ButtonContainer>
      </ModalContainer>
    </FinishWindowContainer>
  );
};

export default FinishWindow;
