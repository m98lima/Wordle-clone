import { useState } from "react";
import Grid from "./components/Grid/Grid";
import Header from "./components/Header/Header";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const [prevRows, setPrevRows] = useState([]);
  const [currRow, setCurrRow] = useState(["", "", "", "", ""]);
  const [emptyRows, setEmptyRows] = useState(5);
  const [currIndex, setCurrIndex] = useState(0);

  let tempCurrRow;

  const checkWord = () => {
    console.log("Comparing word with expected answer");
    return false;
  };

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
      if (!checkWord()) {
        if (emptyRows > 0) {
          setPrevRows([...prevRows, currRow]);
          setCurrRow(["", "", "", "", ""]);
          setEmptyRows(emptyRows - 1);
          setCurrIndex(0);
          console.log(prevRows);
          console.log(currRow);
          console.log(emptyRows);
        } else {
          console.log("No more attempts left");
        }
      } else {
        console.log("That's the correct word!");
      }
    }
  };

  return (
    <div className="App">
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
