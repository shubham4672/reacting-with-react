import React from "react";
import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Form method='POST'>
        <div>
          <label htmlFor='username'>Full name</label>
          <input
            type='text'
            name='username'
            id='username'
            required
            autoComplete='off'
            placeholder='enter full name'
          />
        </div>
        <div>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            name='email'
            id='email'
            required
            autoComplete='off'
            placeholder='Enter email address'
          />
        </div>
        <button>Submit</button>
      </Form>
    </div>
  );
};

export default Contact;
