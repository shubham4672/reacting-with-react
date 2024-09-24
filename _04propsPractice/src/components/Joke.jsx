import "../App.css";
import PropTypes from "prop-types";

export default function Joke(props) {
  return (
    <>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      {props.punchline && <p>Punchline: {props.punchline}</p>}
      <hr />
    </>
  );
}

Joke.propTypes = {
  setup: PropTypes.string.isRequired,
  punchline: PropTypes.string.isRequired,
};
