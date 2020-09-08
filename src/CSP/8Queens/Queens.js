import React from "react";

function upperDiagIsClear(board) {}

function placeQueen(board, row, col) {
  board[row][col] = true;
}
function removeQueen(board, row, col) {
  board[row][col] = false;
}
function clearBoard(board) {
  board = board.map((row) => {
    return row.map((column) => {
      return false;
    });
  });
  return board;
}

function solve(board, col) {
  if (col >= board) return true;

  return false;
}
function drawBoard(board) {
  return (
    <div>
      {board.map((row) => {
        return (
          <div className="SingleLine">
            {row.map((column) => {
              return <p>[Q]</p>;
            })}
            <br />
          </div>
        );
      })}
    </div>
  );
}
const Queens = () => {
  var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  return <div>{drawBoard(board)}</div>;
};

export default Queens;
