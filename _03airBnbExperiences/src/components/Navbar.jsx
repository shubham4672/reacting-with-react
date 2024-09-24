import Logo from "../assets/images.png";
import "../App.css";

export default function Navbar() {
  return (
    <nav className='nav'>
      <img src={Logo} alt='AirBnB logo' className='nav--logo' />
    </nav>
  );
}
