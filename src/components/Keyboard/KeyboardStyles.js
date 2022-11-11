import styled from "styled-components";
import { CellContainer, GridContainer, RowContainer } from "../Grid/GridStyles";


export const KeyboardContainer = styled(GridContainer)`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 50px;
  padding-top: 70px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: white;
  box-shadow: 0px 2px 20px #e1e1e1;
`;

export const KeyRowContainer = styled(RowContainer)`
  margin: 5px;
`;

export const KeyContainer = styled(CellContainer)`
  font-size: 20px;
  padding-bottom: 2px;
  padding-top: 10px;
  margin-inline: 1px;
  cursor: pointer;

  &:hover {
    width: 1.7em;
    height: 1.7em;
  };
  transition: 0.2s;
`;

export const SpecialKeyContainer = styled(KeyContainer)`
  width: 55px;

  &:hover {
    width: 3em;
    height: 1.7em;
  };
`;