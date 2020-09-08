import React from "react";

const PuzzleInput = ({
  questionList,
  setQuestionList,
  operator,
  setOperator,
  answer,
  setAnswer,
  solve,
  setSolveToggle,
}) => {
  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...questionList];
    list[index][name] = value;
    setQuestionList(list);
    // console.log(questionList);
  };

  const handleOperatorChange = (event) => {
    var value = event.target.value;
    const regex = /[^+-/*]/g;
    if (regex.test(value)) {
      setOperator("");
    } else {
      setOperator(event.target.value);
    }
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };
  const handleRemoveClick = (index) => {
    const list = [...questionList];
    list.splice(index, 1);
    setQuestionList(list);
  };

  const handleAddClick = () => {
    setQuestionList([...questionList, { question: "" }]);
  };

  return (
    <div className="Form">
      <div className="Equation">
        {questionList.map((value, index) => {
          return (
            <div key={index}>
              <div className="SingleLine">
                {questionList.length - 1 === index && (
                  <input
                    name="operator"
                    placeholder="(+)"
                    className="Operator-Input"
                    value={operator}
                    maxLength="1"
                    onChange={(event) => handleOperatorChange(event)}
                  />
                )}
                <input
                  name="question"
                  placeholder="NINA"
                  className="Code-Input"
                  value={value.question}
                  onChange={(event) => handleInputChange(event, index)}
                />

                {questionList.length !== 2 && (
                  <button onClick={() => handleRemoveClick(index)}>(X)</button>
                )}
              </div>
              {questionList.length - 1 === index && (
                <button onClick={handleAddClick}>(+)</button>
              )}
            </div>
          );
        })}

        <hr className="Underline" />
        <input
          name="answer"
          placeholder="NINA"
          className="Code-Input"
          value={answer}
          onChange={(event) => handleAnswerChange(event)}
        />
      </div>
      <button onClick={() => setSolveToggle(!solve)}>SOLVE</button>
    </div>
  );
};

export default PuzzleInput;
