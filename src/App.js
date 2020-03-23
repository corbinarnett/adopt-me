import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Hank",
      animal: "Dog",
      breed: "Frenchie"
    }),
    React.createElement(Pet, {
      name: "Spot",
      animal: "Dog",
      breed: "Australian Shepherd"
    }),
    React.createElement(Pet, { name: "Cash", animal: "Cat", breed: "Siamese" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
