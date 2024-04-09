import React from "react";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <div className="flex justify-between m-auto p-5 bg-black text-white max-w-[150%]">
      <div className="flex gap-4">
        <div className="bg-red-600 rounded-full flex justify-center items-center w-[37px] h-[37px] text-white font-extrabold ">
        <CiUser size={17}/>
        </div>
        <div className="border-b-2 w-48 hidden md:flex text-white items-center">
          <CiSearch size={26} className="rotate-90"/>
          <input type="text" placeholder="search" className="bg-transparent outline-none w-full"/>
        </div>
      </div>

      <div>
      <IoMenu size={36} className="md:hidden"/>
        <ul className="hidden md:flex justify-between gap-5">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>EVENTS</li>
          <li>PRODUCTS</li>
          <li>ATHLETES</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
