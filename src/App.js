import { useState } from "react";
import FinishWindow from "./components/FinishWindow/FinishWindow";
import Grid from "./components/Grid/Grid";
import Header from "./components/Header/Header";
import Keyboard from "./components/Keyboard/Keyboard";
import { checkWord } from "./util/WordChecker";

function App() {
  const [prevRows, setPrevRows] = useState([]);
  const [currRow, setCurrRow] = useState(["", "", "", "", ""]);
  const [emptyRows, setEmptyRows] = useState(5);
  const [currIndex, setCurrIndex] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isWordCorrect, setIsWordCorrect] = useState(false);

  let tempCurrRow;

  const handleKeyPress = (key) => {
    return () => {
      if (currIndex < 5) {
        tempCurrRow = currRow;
        tempCurrRow[currIndex] = key;
        setCurrIndex(currIndex + 1);
        setCurrRow(tempCurrRow);
      }
    };
  };

  const handleBack = () => {
    if (currIndex > 0) {
      tempCurrRow = currRow;
      tempCurrRow[currIndex - 1] = "";
      setCurrIndex(currIndex - 1);
      setCurrRow(tempCurrRow);
    }
  };

  const handleEnter = () => {
    if (currIndex == 5) {
      const result = checkWord(currRow);
      const temp = result.checkedRow;
      const isCorrect = result.isCorrect;
      if (!isCorrect) {
        if (emptyRows > 0) {
          setPrevRows([...prevRows, temp]);
          setCurrRow(["", "", "", "", ""]);
          setEmptyRows(emptyRows - 1);
          setCurrIndex(0);
        } else {
          setPrevRows([...prevRows, temp]);
          setCurrRow([]);
          setIsWordCorrect(false);
          setIsGameFinished(true);
          console.log("No more attempts left");
        }
      } else {
        setPrevRows([...prevRows, temp]);
        setCurrRow([]);
        setIsWordCorrect(true);
        setIsGameFinished(true);
        console.log("That's the correct word!");
      }
    }
  };

  return (
    <div className="App">
      {isGameFinished && <FinishWindow isWordCorrect={isWordCorrect} />}
      <Header />
      <Grid prevRows={prevRows} currRow={currRow} rowAmount={emptyRows} />
      <Keyboard
        handleKeyPress={handleKeyPress}
        handleBack={handleBack}
        handleEnter={handleEnter}
      />
    </div>
  );
}

export default App;
