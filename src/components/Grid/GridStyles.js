import styled from "styled-components";

export const GridContainer = styled.div`
  margin: 45px auto 30px;
`;

export const RowContainer = styled.div`
  list-style-type: none;
  margin: 11px;
  text-align: center;
  padding: 0;
`;

export const CellContainer = styled.div`
  border: 4px solid;
  border-color: ${(props) =>
    props.color == "green"
      ? "#2BCC3F"
      : props.color == "yellow"
      ? "#F2EF1F"
      : props.color == "red"
      ? "#F52912"
      : "#b5b5b5"};
  background-color: #f5f5f5;
  height: 30px;
  width: 30px;
  display: inline-block;
  border-radius: 4px;
  padding: 5px;
  padding-bottom: 12px;
  margin-inline: 2px;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
`;

export const CurrentCellContainer = styled(CellContainer)`
  height: 33px;
  width: 33px;
`;
