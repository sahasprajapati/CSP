import React, { useEffect, useState } from "react";
import {
  getCryptoArithmeticFormat,
  isValid,
  assignLetterFromDigit,
  unassignLetterFromDigit,
  mapLettersToDigit,
} from "./utilityFunction";

function exhaustiveSolve(puzzle, variables, lettersToAssign, operator) {
  if (lettersToAssign.length === 0) return isValid(puzzle, variables, operator);

  for (var digit = 0; digit <= 9; digit++) {
    const [bool, vari] = assignLetterFromDigit(
      lettersToAssign[0],
      digit,
      variables,
      puzzle
    );
    variables = vari;

    if (bool) {
      if (
        exhaustiveSolve(puzzle, variables, lettersToAssign.slice(1), operator)
      )
        return true;
      console.log(variables);
    }
    variables = unassignLetterFromDigit(lettersToAssign[0], digit, variables);
  }
  return false;
}

function solveCrypto(questionList, answer, operator, setDisplay) {
  // Formatting for processing
  const { variables, position } = getCryptoArithmeticFormat(
    questionList,
    answer
  );
  const letters = Object.keys(variables);
  if (variables.length > 10) {
    console.log("Invalid Strings. Cannot be greater than 10 variables");
  } else {
    if (exhaustiveSolve(position, variables, letters, operator)) {
      console.log("Answer", variables);
      setDisplay(mapLettersToDigit(position, variables));
    } else {
      console.log("Unable to Solve");
    }
  }
}

const CryptoArithemetic = ({ questionList, answer, operator, solve }) => {
  const [display, setDisplay] = useState();
  useEffect(() => {
    if (solve) solveCrypto(questionList, answer, operator, setDisplay);
  }, [answer, operator, questionList, solve]);
  return (
    <div className="Form">
      <div className="Equation">
        {display &&
          display.map((value, index) => {
            return (
              <div className="SingleLine" key={index}>
                {index === display.length - 2 ? <p>{operator}</p> : undefined}
                <p key={index}>{value}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default CryptoArithemetic;
