import { keys } from "../../util/Keyboard";
import { KeyboardContainer, KeyContainer, KeyRowContainer, SpecialKeyContainer } from "./KeyboardStyles";


const Keyboard = ({ handleKeyPress, handleBack, handleEnter }) => {
  return (
    <KeyboardContainer>
      <KeyRowContainer>
        {keys[0].map((key) => (
          <KeyContainer onClick={handleKeyPress(key)} >{key}</KeyContainer>
        ))}
      </KeyRowContainer>

      <KeyRowContainer>
        {keys[1].map((key) => (
          <KeyContainer onClick={handleKeyPress(key)} >{key}</KeyContainer>
        ))}
      </KeyRowContainer>

      <KeyRowContainer>
        <SpecialKeyContainer onClick={handleBack} >{"Back"}</SpecialKeyContainer>
        {keys[2].map((key) => (
          <KeyContainer onClick={handleKeyPress(key)} >{key}</KeyContainer>
        ))}
        <SpecialKeyContainer onClick={handleEnter} >{"Enter"}</SpecialKeyContainer>
      </KeyRowContainer>
    </KeyboardContainer>
  );
};

export default Keyboard;