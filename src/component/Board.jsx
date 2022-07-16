import React from "react";

export default function Board(props) {
  const { board, onClick } = props;
  return (
    <table cellSpacing={0}>
        <tbody>
      {board.map((row, rowInd) => (
          <tr key={rowInd}>
          {row.map((column, colInd) => (
              <td
              key={colInd}
              className={
                  (rowInd % 2 ? "verti-border " : "") +
                  (colInd % 2 ? "hori-border" : "")
                }
                onClick={(e)=> onClick(e,rowInd,colInd)}
                >
              {column}
            </td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
}
