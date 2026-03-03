import React, { use } from "react";
import ThemeContext from "../context/theme-context";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
const DarkLight = () => {
  const { theme, handleToggleTheme } = use(ThemeContext);
  return (
    <div
      className={`font-syne ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"} h-lvh w-lvw`}
    >
      <h1 className='mb-5'>Dark Light mode</h1>
      <p className='mb-5'>Welcome to React v19</p>
      <button className='mb-5 text-white' onClick={handleToggleTheme}>
        {theme === "light" ? (
          <div className='flex items-center gap-2'>
            Switch to dark mode <MdDarkMode />
          </div>
        ) : (
          <div className={"flex items-center gap-2"}>
            Switch to light mode <CiLight />
          </div>
        )}
      </button>
    </div>
  );
};

export default DarkLight;
