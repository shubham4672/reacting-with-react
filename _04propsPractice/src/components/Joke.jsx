import React from "react";
import PropTypes from "prop-types";
import "../App.css";

export default function Joke(props) {
  const [show, setShow] = React.useState(false);
  function toggle() {
    setShow((prevState) => !prevState);
  }
  return (
    <>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      {show && <p>Punchline: {props.punchline}</p>}
      <button onClick={toggle}>{show ? "Hide" : "Show"} punchline</button>
      <hr />
    </>
  );
}

Joke.propTypes = {
  setup: PropTypes.string.isRequired,
  punchline: PropTypes.string.isRequired,
};
