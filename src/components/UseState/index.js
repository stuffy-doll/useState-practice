import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className={theme}>
      <h1>UseState Component</h1>
    </div>
  );
};

export default UseState;
