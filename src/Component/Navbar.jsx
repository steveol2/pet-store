import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiFillHome, AiFillContacts } from "react-icons/ai";
import { RiMenu4Fill } from "react-icons/ri";

import { TiSpanner } from "react-icons/Ti";
import CartBadge from "../Component/CartBadge";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center max-w-[1200px] px-4 mx-auto h-18 text-black">
      <Link to="/" className="font-bold text-2xl">
        MARLEY
      </Link>
      <ul className="md:flex  hidden space-x-10 mx-auto text-lg font-semibold relative ">
        <li className="p-4 relative group">
          Home
          <span className="absolute  left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full bottom-2 "></span>
        </li>
        <li className="p-4 relative group">
          ACCESSORIES
          <span className="absolute  left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full bottom-2"></span>
        </li>
        <li className="p-4 relative group">
          FOOD
          <span className="absolute left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full bottom-2"></span>
        </li>
      </ul>

      <div className="md:flex hidden">
        <button className="px-6 py-3 my-2 flex items-center rounded bg-blue-400 text-white hover:scale-110 duration-500 ">
          Contact
        </button>
      </div>
      <CartBadge />

      <div onClick={handleNav} className="block md:hidden ml-auto">
        {nav ? <AiOutlineClose size={20} /> : <RiMenu4Fill size={25} />}
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] h-full border-r border-l-red-500 bg-[#004225] text-gray-400  ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <h1 className=" w-full text-2xl font-bold m-6">SO.</h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600 flex ">
            <AiFillHome size={20} style={{ marginRight: "5px" }} /> Home
          </li>
          <li className="p-4 border-b border-gray-600 flex">
            <TiSpanner size={20} style={{ marginRight: "5px" }} />
            Project
          </li>
          <li className="p-4 border-b border-gray-600 flex">
            <AiFillContacts size={20} style={{ marginRight: "5px" }} />
            About
          </li>
          <li className="p-4 border-b border-gray-600 flex">
            <AiFillContacts size={20} style={{ marginRight: "5px" }} />
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
