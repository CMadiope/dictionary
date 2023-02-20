import React from "react";
import { BiBookAlt } from "react-icons/bi";
import { BsToggleOn, BsToggleOff, BsMoon } from "react-icons/bs";

const Navbar = ({ toggleMode, darkMode }) => {
  return (
    <nav className='flex justify-between p-10 items-center'>
      <div className='text-gray-500'>
        <BiBookAlt size={30} />
      </div>
      <div className='flex gap-6 items-center'>
        <select>
          <option>Serif</option>
          <option>Mono</option>
          <option>Sans</option>
        </select>
        <div
          onClick={toggleMode}
          className='text-gray-500 dark:text-purple-700 border-l-2 pl-4'
        >
          {darkMode ? <BsToggleOff size={30} /> : <BsToggleOn size={30} />}
        </div>
        <BsMoon size={25} className='text-gray-500 dark:text-purple-700' />
      </div>
    </nav>
  );
};

export default Navbar;
