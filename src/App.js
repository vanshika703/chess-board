import "./App.css";
import { useState } from "react";

function App() {
  const [highlight, setHighlight] = useState([]);
  const [current, setCurrent] = useState([]);
  function handleOnClick(i, j) {
    let data = [];
    const ones = [-2, +2];
    const twos = [-1, +1];
    ones.forEach((one) => {
      return twos.forEach((two) => {
        data.push([i + one, j + two]);
        data.push([i + two, j + one]);
      });
    });
    const val = data.filter((value) => value[0] >= 0 && value[1] >= 0);
    console.log(val);
    setHighlight(data);
    setCurrent([i, j]);
  }

  return (
    <div className="App">
      <div className="flex-center">
        {[...Array(8)].map((_e, i) => {
          return [...Array(8)].map((_e, j) => {
            const isAlt =
              (i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0);
            const isHigh = highlight.find((h) => h[0] === i && h[1] === j);
            const isCurrent = current[0] === i && current[1] === j;
            return (
              <div
                className={
                  "box " +
                  (isAlt ? "alt " : "") +
                  (isHigh ? "highlight" : "") +
                  (isCurrent ? "current" : "")
                }
                key={`${i + " " + j}`}
                onClick={() => handleOnClick(i, j)}
              >
                {/* {i + " ," + j}{" "} */}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default App;
