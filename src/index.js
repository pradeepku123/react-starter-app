import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//Stateless Functional Component

function Greeting(params) {
  return (
    <>
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
    </>
  );
}

const Welcome = () => {
  return (
    <>
      <section> Hello World</section>
    </>
  );
};

ReactDom.render(<Greeting />, document.getElementById("root"));
