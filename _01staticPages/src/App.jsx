import image from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className='card'>
        <nav className='nav'>
          <div className='logo'>
            <img src={image} alt='Image' />
          </div>
          <div className='info'>
            <ul>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
        <h1 className='m5'>Fun facts about React</h1>
        <ul className='m5 p5'>
          <li> Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </>
  );
}

export default App;
