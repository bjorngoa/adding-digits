import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState({
    number: ""
  });
  const [result, setResult] = useState("");
  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const add = () => {
    const { number } = input;
    setResult(
      String(number)
        .split("")
        .reduce((acc, curr) => {
          return acc + Number(curr);
        }, 0)
    );
  };

  return (
    <div className="App">
      <h1>Adding digits!</h1>
      <span style={{ border: "1px red solid", padding: "5px" }}>
        ex. 123 => 1+2+3 = 6
      </span>
      <br />
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "400px"
        }}
      >
        <div>
          <input
            onChange={handleInput}
            name="number"
            type="number"
            style={{
              marginRight: "10px",
              padding: "10px",
              border: "none",
              borderRadius: "10px"
            }}
            placeholder="Enter digits here!"
          />
          <button
            onClick={add}
            style={{
              backgroundColor: "blue",
              border: "none",
              borderRadius: "8px",
              padding: "10px",
              color: "#fff",
              fontWeight: "bold"
            }}
          >
            SUBMIT
          </button>
        </div>
        <div
          style={{
            border: "2px solid blue",
            padding: "10px 10px 2px 2px",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-between",
            width: "100px",
            marginTop: "10px",
            marginLeft: "100px"
          }}
        >
          <span>Result: </span>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}
