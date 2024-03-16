import "./App.css";
import "./theme.css";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState("Ali Hassan");
  const [count, setcount] = useState(0);
  const [name, setChangeName] = useState("Ahmad");
  const [theme, setTheme] = useState("");

  // const ChangeName = () => {
  //   setAge("25");
  // };

  return (
    <div className={`App ${theme}`}>
      <div>
        <button
          onClick={() => {
            setTheme("");
          }}
          style={{ marginRight: "26px" }}
        >
          {" "}
          Light
        </button>
        <button
          onClick={() => {
            setTheme("dark");
          }}
          style={{ marginRight: "26px" }}
        >
          {" "}
          Dark
        </button>
        <button
          onClick={() => {
            setTheme("grey");
          }}
          style={{ marginRight: "26px" }}
        >
          {" "}
          Grey
        </button>
        <button
          onClick={() => {
            setTheme("pink");
          }}
        >
          {" "}
          Pink{" "}
        </button>
      </div>
      <h2 style={{ marginTop: "22px" }}> My Name is {person}</h2>

      <button
        onClick={() => {
          setChangeName("Ali");
        }}
      >
        {" "}
        Change Name
      </button>
      <h2> number : {count} </h2>
      <button
        onClick={() => {
          setcount(1 + count);
        }}
      >
        +
      </button>
      <h2>Backgorund color</h2>
      <button>button</button>
    </div>
  );
}

export default App;
