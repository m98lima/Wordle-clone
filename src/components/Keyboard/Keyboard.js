import { keys } from "../../util/Keyboard";
import { KeyboardContainer, KeyContainer, KeyRowContainer, SpecialKeyContainer } from "./KeyboardStyles";


const Keyboard = () => {
  return (
    <KeyboardContainer>
      <KeyRowContainer>
        {keys[0].map((key) => (
          <KeyContainer>{key}</KeyContainer>
        ))}
      </KeyRowContainer>

      <KeyRowContainer>
        {keys[1].map((key) => (
          <KeyContainer>{key}</KeyContainer>
        ))}
      </KeyRowContainer>

      <KeyRowContainer>
        <SpecialKeyContainer>{"Back"}</SpecialKeyContainer>
        {keys[2].map((key) => (
          <KeyContainer>{key}</KeyContainer>
        ))}
        <SpecialKeyContainer>{"Enter"}</SpecialKeyContainer>
      </KeyRowContainer>
    </KeyboardContainer>
  );
};

export default Keyboard;