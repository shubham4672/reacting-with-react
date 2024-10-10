import Image from "../assets/react.svg";

export default function Header() {
  return (
    <nav className='nav'>
      <div className='logo'>
        <img src={Image} alt='React Logo' />
        <strong>ReactFacts</strong>
      </div>
      <p>React Course - Project 1</p>
    </nav>
  );
}
