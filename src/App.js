import React from "react";
import "./App.css";
import GetDerivedSample from "./components/lifecycle/GetDerivedSample";

function App() {
  return (
    <div>
      <h1>Render Call Return from App</h1>
      <p>Designed CSS</p>
      <GetDerivedSample prop_value='send text to component' />
    </div>
  );
}

export default App;
