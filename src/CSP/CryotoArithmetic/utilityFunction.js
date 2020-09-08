// Gives a proper format for analysis from questio, answer
export function getCryptoArithmeticFormat(questions, answer) {
  var variables = {};
  var position = [];

  // Each question preprocessing
  questions.map((value, index) => {
    position = [...position, []];
    var char = value.question.split("");
    char.filter((value, i) => {
      position[index][i] = value;
      if (variables.length !== 0 && variables.hasOwnProperty(value)) {
        return false;
      }
      variables[value] = 0;
      return true;
    });
    return 1;
  });

  // Answer preprocessing
  position = [...position, []];
  var char = answer.split("");
  char.filter((value, index) => {
    position[position.length - 1][index] = value;

    if (variables.length !== 0 && variables.hasOwnProperty(value)) {
      return false;
    }
    variables[value] = 0;
    return true;
  });

  return { variables, position };
}

export function mapLettersToDigit(puzzle, variables) {
  const concat = puzzle.map((value) => {
    var str = "";
    value.map((val) => {
      str += val;
      return str;
    });
    return str;
  });

  for (const [key, value] of Object.entries(variables)) {
    concat.map((val, idx) => {
      const regex = new RegExp(`${key}`, "g");
      concat[idx] = val.replace(regex, value);
      return 0;
    });
  }
  console.log(concat);

  return concat;
}
// Checks validity of assigned data
export function isValid(puzzle, variables, operator) {
  var calc = 0;
  var answer;
  const concat = mapLettersToDigit(puzzle, variables);
  concat.map((value, idx) => {
    if (idx !== concat.length - 1) {
      switch (operator) {
        case "-":
          calc -= parseInt(value);
          break;
        case "*":
          calc *= parseInt(value);
          break;
        case "/":
          calc /= parseInt(value);
          break;
        default:
          calc += parseInt(value);
      }
    } else answer = parseInt(value);

    return parseInt(value);
  });

  if (calc === answer) return true;
  else return false;
}

export function assignLetterFromDigit(letter, digit, variables, puzzle) {
  for (const i in puzzle) {
    if (puzzle[i][0] === letter && digit === 0) {
      return [false, variables];
    }
  }
  for (const [key, value] of Object.entries(variables)) {
    // console.log(value, digit);
    if (value === digit) return [false, variables];
  }
  if (variables[letter] === "" || variables[letter] === undefined) {
    variables[letter] = digit;
    return [true, variables];
  } else {
    return [false, variables];
  }
}

export function unassignLetterFromDigit(letter, digit, variables) {
  if (variables[letter] === digit) {
    variables[letter] = "";
  }
  return variables;
}
