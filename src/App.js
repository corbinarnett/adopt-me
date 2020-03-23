const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
