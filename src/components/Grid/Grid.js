import { CellContainer, GridContainer, RowContainer } from "./GridStyles";

const generateNextRows = (rowAmount) => {
  let nextRows = [];

  for (let i = rowAmount; i > 0; i--) {
    nextRows = [...nextRows, ["", "", "", "", ""]];
  }

  return nextRows;
};

const Grid = ({ prevRows, currRow, rowAmount }) => {
  let nextRows = generateNextRows(rowAmount);

  return (
    <GridContainer>
      {/* rendering rows above the current */}
      {prevRows.map((row) => (
        <RowContainer>
          {row.map((elem) => (
            <CellContainer>{elem}</CellContainer>
          ))}
        </RowContainer>
      ))}

      {/* rendering the current row */}
      <RowContainer>
        {currRow.map((elem) => (
          <CellContainer>{elem}</CellContainer>
        ))}
      </RowContainer>

      {/* rendering empty rows after current one */}
      {nextRows.map((row) => (
        <RowContainer>
          {row.map((elem) => (
            <CellContainer>{elem}</CellContainer>
          ))}
        </RowContainer>
      ))}
    </GridContainer>
  );
};

export default Grid;
