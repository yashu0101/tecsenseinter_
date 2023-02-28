import { useState } from "react";

const MatrixComponent = () => {
  const [matrix, setMatrix] = useState([
    [null, null],
    [null, null],
  ]);
  // const [data, setData] = useState({});

  const handleChange = (row, column, event) => {
    let copy = [...matrix];
    copy[row][column] = +event.target.value;
    setMatrix(copy);
    console.log(matrix);
  };

  return (
    <>
      <div>
        <table style={{ margin: "auto", marginTop: "400px" }}>
          <tbody>
            {matrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((column, columnIndex) => (
                  <td key={columnIndex}>
                    <input
                      style={{
                        width: 100,
                        height: 100,
                        border: "2px solid #000",
                      }}
                      type="number"
                      onChange={(e) => handleChange(rowIndex, columnIndex, e)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MatrixComponent;
