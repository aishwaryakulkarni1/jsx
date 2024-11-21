// import react library
import React from "react";
import ReactDOM from "react-dom";

// get a reference to the div ID root
const element = document.getElementById("root");

// tell react to take control of the element
const root = ReactDOM.createRoot(element);

//create a component
function App() {
  return <h1> Hi There</h1>;
}

//show the component on the screen
root.render(<App />);
