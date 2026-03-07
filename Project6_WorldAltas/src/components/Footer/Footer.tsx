import { MdPlace } from "react-icons/md";
import footerData from "../../api/footerData.json";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import type { JSX } from "react";
import { NavLink } from "react-router-dom";

type IconName = "MdPlace" | "IoCallSharp" | "TbMailPlus";

const iconMap: Record<IconName, JSX.Element> = {
  "MdPlace": <MdPlace />,
  "IoCallSharp": <IoCallSharp />,
  "TbMailPlus": <TbMailPlus />
}

const Footer = () => {

  return (
    <footer className='footer-section'>
      <div className='container grid grid-three-cols'>
        {footerData &&
          footerData.map((currItem, index) => {
            const icon = currItem.icon as IconName;
            return (
              <div className='footer-contact' key={index}>
                <div className='icon'>{iconMap[icon]}</div>
                <div className='footer-contact-text'>
                  <p>{currItem.title}</p>
                  <p>{currItem.details}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2026, All rights reserved
                <NavLink to="/https://github.com/shubham4672" target="_blank">
                  Github
                </NavLink>
              </p>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/country">Country</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
