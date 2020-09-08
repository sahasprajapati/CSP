import React, { useState } from "react";
import "./App.css";
import CryptoArithmetic from "./CSP/CryotoArithmetic/CryptoArithemetic";
import PuzzleInput from "./CSP/CryotoArithmetic/PuzzleInput";
import Queens from "./CSP/8Queens/Queens";

// function backtrack(conf){
//   if ()
//     return (goal reached)
//   for (choices)
//     try one
//     ok = backtrack(conf with choice)
//     if (ok)
//       return true
//     else
//       unmake choice

//   return false;
//     }

function App() {
  const [error, setError] = useState("");
  const [questionList, setQuestionList] = useState([
    { question: "" },
    { question: "" },
  ]);
  const [operator, setOperator] = useState("+");
  const [answer, setAnswer] = useState("");
  const [solve, setSolveToggle] = useState(false);
  return (
    <div className="App">
      <h1>CryptoArithmetic Solver</h1>
      <div>
        Modus
        <h2>QUestion</h2>
        <PuzzleInput
          questionList={questionList}
          setQuestionList={setQuestionList}
          operator={operator}
          setOperator={setOperator}
          answer={answer}
          setAnswer={setAnswer}
          solve={solve}
          setSolveToggle={setSolveToggle}
        />
        <h2>Solutions</h2>
        <CryptoArithmetic
          questionList={questionList}
          answer={answer}
          operator={operator}
          solve={solve}
        />
      </div>

      <div>
        <h2>8Queens</h2>
        <div>
          <Queens />
        </div>
      </div>
    </div>
  );
}

export default App;
