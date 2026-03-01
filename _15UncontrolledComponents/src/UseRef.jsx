import React, { useId, useRef } from "react";

const UseRef = () => {
  const id = useId();

  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value + " " + password.current.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type='text' id={id + "username"} ref={username} />
        <br />
        <input type='text' id={id + "password"} ref={password} />
        <br />
        <button>Submit</button>
      </form>
      <AnotherForm name={username} ref={username} />
    </div>
  );
};

export const AnotherForm = ({ref}) => {
  return <input type="text" name="username" ref={ref} />
}

export default UseRef;
