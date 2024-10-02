const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "heading one"),
    React.createElement("h2", {}, "heading two"),
    React.createElement("h3", {}, "heading three")
  ),

  React.createElement(
    "div",
    { id: "child-2" },
    React.createElement("h5", {}, "heading-5"),
    React.createElement("h6", {}, "heading-6")
  )
);
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
