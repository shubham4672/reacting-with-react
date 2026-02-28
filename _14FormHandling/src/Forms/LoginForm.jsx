import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className='forms'>
      <h1>
        Hello, <strong>Log in</strong> and continue
      </h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='email_address'>Email</label>
        <input
          type='email'
          placeholder='johndoe@gmail.com'
          name='email_address'
          id='email_address'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
