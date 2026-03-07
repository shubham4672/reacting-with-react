type ContactResponse = {
  username: string;
  useremail: string;
  message: string;
}

const Contact = () => {

  const handleFormSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries()) as ContactResponse;
    console.log(data);
  };

  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact Us</h2>

      <div className='container contact-wrapper'>
        <form action={handleFormSubmit}>
          <input
            type='text'
            name='username'
            placeholder='Enter your name'
            className='form-control'
            autoComplete='off'
            required
          />

          <input
            type='email'
            name='useremail'
            placeholder='Enter your email'
            className='form-control'
            autoComplete='off'
            required
          />

          <textarea
            name='message'
            className='form-control'
            rows={10}
            placeholder='Enter your message'
            autoComplete='off'
            required
          ></textarea>

          <button type='submit' className="send-btn">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
