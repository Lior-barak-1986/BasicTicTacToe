import React, { useState } from "react";
import Board from "./Board";

export default function Game(props) {
  const [turn, setTurn] = useState(true);
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState(false);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const onBoardClick = (event, row, col) => {
    if (turn && !board[row][col] && !winner) {
      const tempBoard = board;
      tempBoard[row][col] = round % 2 ? "O" : "X";
      setBoard(tempBoard);
      setRound((val) => val + 1);
      checkWin();
    }
  };

  const checkWin = () => {
    board.forEach((row) => {
      if (row[0] === row[1] && row[0] === row[2] && row[0] !== "")
        setWinner(true);
    });
    if (
      (board[0][0] === board[1][1] &&
        board[0][0] === board[2][2] &&
        board[0][0] !== "") ||
      (board[0][2] === board[1][1] &&
        board[0][2] === board[2][0] &&
        board[0][2] !== "")
    )
      setWinner(true);
    if (
      (board[0][0] === board[1][0] &&
        board[0][0] === board[2][0] &&
        board[0][0] !== "") ||
      (board[1][1] === board[0][1] &&
        board[1][1] === board[2][1] &&
        board[1][1] !== "") ||
      (board[2][2] === board[0][2] &&
        board[2][2] === board[1][2] &&
        board[2][2] !== "")
    )
      setWinner(true);
  };

  const reset = () => {
    setBoard([["", "", ""], ["", "", ""], ["", "", ""]]);
    setRound(0);
    setWinner(false);
  };
  return (
    <div>
      <h1>Game</h1>
      <h3>
        {" "}
        {winner
          ? `The winner is ${round % 2 ? "X" : "O"} `
          : `${
              round < 9
                ? `It is your turn ${round % 2 ? "O" : "X"} `
                : `Gameover`
            }`}
      </h3>
      <Board board={board} onClick={onBoardClick} />
      <button onClick={reset}>Reset</button>
    </div>
  );
}
