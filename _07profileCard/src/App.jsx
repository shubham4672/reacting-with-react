import { useState } from "react";
import Star from "./components/Star";
import "./App.css";

function App() {
  const [contact, setContact] = useState({
    firstName: "Shubham",
    lastName: "Sharma",
    phone: "+1 (719) 555-1212",
    email: "example@gmail.com",
    isFavorite: true,
  });

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className='card'>
        <img
          src='../src/assets/images/user.png'
          alt=''
          className='card--image'
        />
        <div className='card--info'>
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className='card--name'>
            {contact.firstName} {contact.lastName}
          </h2>
          <p className='card--contact'>{contact.phone}</p>
          <p className='card--contact'>{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
