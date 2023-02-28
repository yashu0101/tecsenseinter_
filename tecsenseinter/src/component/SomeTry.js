import React, { useState } from "react";

function findMaxRookSum(matrix) {
  const rowMax = matrix.map((row) => Math.max(...row));
  const colMax = matrix.reduce(
    (acc, cur) => cur.map((val, i) => Math.max(val, acc[i])),
    Array(matrix[0].length).fill(-Infinity)
  );
  const max1 = Math.max(...rowMax);
  const max2 = Math.max(...colMax);
  if (rowMax.indexOf(max1) !== colMax.indexOf(max2)) {
    return max1 + max2;
  }
  const rowMaxWithoutMax1 = rowMax.filter((val) => val !== max1);
  const colMaxWithoutMax2 = colMax.filter((val) => val !== max2);
  const max3 = Math.max(...rowMaxWithoutMax1);
  const max4 = Math.max(...colMaxWithoutMax2);
  return max1 + Math.max(max4, max3) || max2 + Math.max(max4, max3);
}

function Chessboard({ matrix, maxSum }) {
  return (
    <div>
      <table>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>Max sum: {maxSum}</p>
    </div>
  );
}

function SomeTry() {
  const [matrix, setMatrix] = useState([
    [1, 4],
    [2, 3],
  ]);
  const maxSum = findMaxRookSum(matrix);
  return <Chessboard matrix={matrix} maxSum={maxSum} />;
}

export default SomeTry;
