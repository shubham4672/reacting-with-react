import Image from "../assets/react.svg";

export default function Header(props) {
  return (
    <nav className='nav'>
      <div className='logo'>
        <img src={Image} alt='React Logo' />
        <strong>ReactFacts</strong>
      </div>
      <div className='toggler'>
        <p className='toggler--light'>Light</p>
        <div className='toggler--slider' onClick={props.toggleDarkMode}>
          <div className='toggler--slider--circle'></div>
        </div>
        <p className='toggler--dark'>Dark</p>
      </div>
    </nav>
  );
}
