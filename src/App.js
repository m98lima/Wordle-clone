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

  const handleKeyPress = (key) => {
    return () => {
      if (currIndex < 5) {
        tempCurrRow = currRow;
        tempCurrRow[currIndex] = key;
        setCurrIndex(currIndex + 1);
        setCurrRow(tempCurrRow);
      };
    };
  };

  return (
    <div className="App">
      <Header />
      <Grid prevRows={prevRows} currRow={currRow} rowAmount={emptyRows} />
      <Keyboard handleKeyPress={handleKeyPress} />
    </div>
  );
}

export default App;
