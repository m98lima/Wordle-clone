import { useState } from "react";
import Grid from "./components/Grid/Grid";
import Header from "./components/Header/Header";

function App() {
  const [prevRows, setPrevRows] = useState([]);
  const [currRow, setCurrRow] = useState(["", "", "", "", ""]);
  const [emptyRows, setEmptyRows] = useState(5);


  return (
    <div className="App">
      <Header />
      <Grid prevRows={prevRows} currRow={currRow} rowAmount={emptyRows} />
    </div>
  );
}

export default App;
