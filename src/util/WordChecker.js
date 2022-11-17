import correctAnswer from "./correctAnswer";

export const checkWord = (wordToCheck) => {
  let checkedRow = [],
    isCorrect = true;
  for (let i = 0; i < wordToCheck.length; i++) {
    checkedRow = [...checkedRow, { value: wordToCheck[i], color: "" }];
  }

  for (let i = 0; i < checkedRow.length; i++) {
    if (checkedRow[i].value == correctAnswer[i]) {
      checkedRow[i].color = "green";
    }
  }

  for (let i = 0; i < checkedRow.length; i++) {
    if (
      checkedRow[i].color == "" &&
      /* checking if the current letter is included in correct answer array, but only
      if it's in a position not already marked as green */
      correctAnswer.some(
        (elem, index) =>
          correctAnswer.includes(checkedRow[i].value) &&
          elem == checkedRow[i].value &&
          checkedRow[index].color != "green"
      )
    ) {
      /* Checking if there are enough letters left in the correct word 
      before marking in order to avoid marking multiples */
      const filteredAnswer = correctAnswer.filter(
        (elem) => elem == checkedRow[i].value
      );
      const alreadyMarked = checkedRow.filter(
        (elem) => elem.value == checkedRow[i].value && elem.color != ""
      );
      if (filteredAnswer.length > alreadyMarked.length) {
        checkedRow[i].color = "yellow";
        isCorrect = false;
      }
    }
  }

  for (let i = 0; i < checkedRow.length; i++) {
    if (checkedRow[i].color == "") {
      checkedRow[i].color = "red";
      isCorrect = false;
    }
  }

  return { checkedRow, isCorrect };
};
