import Troll from "../assets/troll-face.png";
import { FaGitlab } from "react-icons/fa6";
export default function Header() {
  return (
    <header className='header'>
      <img src={Troll} className='header--image' />
      <h2 className='header--title'>Meme Generator</h2>
      <h4
        className='header--project'
        onClick={() =>
          window.open("https://gitlab.com/shubham888/meme-generator", "_blank")
        }
      >
        GitLab Link
        <FaGitlab />
      </h4>
    </header>
  );
}
