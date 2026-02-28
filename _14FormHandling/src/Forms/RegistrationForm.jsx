import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    password: "",
    confirm_password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value.trim() }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className='forms'>
      <h1>
        Hello, <strong>Sign up</strong> and continue
      </h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='full_name'>Full Name</label>
        <input
          type='text'
          placeholder='John Doe'
          name='full_name'
          id='full_name'
          value={formData.full_name}
          onChange={handleOnChange}
        />
        <label htmlFor='email_address'>Email</label>
        <input
          type='email'
          placeholder='johndoe@gmail.com'
          name='email_address'
          id='email_address'
          onChange={handleOnChange}
          value={formData.email_address}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleOnChange}
        />
        <label htmlFor='confirm_password'>Confirm Password</label>
        <input
          type='password'
          name='confirm_password'
          id='confirm_password'
          placeholder='Confirm Password'
          value={formData.confirm_password}
          onChange={handleOnChange}
        />
        <button>Sign Up</button>
      </form>
      <div className='user-info'>
        {formData.full_name && <span>Hello user {formData.full_name}.</span>}
        {formData.email_address && <span> {formData.email_address} is nice.</span>}
      </div>
    </div>
  );
};

export default RegistrationForm;
