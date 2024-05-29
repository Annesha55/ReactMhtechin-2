import React, { useState } from "react";
import Mhlogo from "../assets/logo.png";
import Menu from "../assets/Menu";

const Header = () => {
  const [isOpen, Setisopen] = useState(false);
  const open = () => {
    Setisopen((pre) => !pre);
  };
  return (
    <div className=" xl:h-10 xl:px-24 bg-transparent flex xl:w-full justify-between my-8 items-center z-30 sticky top-0">
      <div className="ml-12 ease-out flex justify-center items-center w-1/5 lg:gap-8">
        <img className="w-16 " src={Mhlogo} />
        <a className="font-bold mt-3">MHTECHIN</a>
      </div>
      <div
        className={`absolute z-50 gap-2 mt-8 bg-white p-4 flex text-center flex-col justify-evenly w-full font-bold transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } lg:hidden`}
      >
        <button className="ease-out absolute top-8 right-12" onClick={open}>
          X
        </button>
        <a className="font-bold mt-3">MHTECHIN</a>
        <a className="hover:bg-slate-200 border-b-2">Home</a>
        <a className="hover:bg-slate-200 border-b-2">Price</a>
        <a className="hover:bg-slate-200 ">Product</a>
      </div>
      <div className="hidden lg:flex justify-evenly w-3/4 font-bold">
        <a>Home</a>
        <a>Price</a>
        <a>Product</a>
      </div>
      <div className="md:flex mr-12 justify-between gap-4 lg:w-2/6 ">
        <button className=" px-8 py-2 bg-[#ab8bd2] lg:block hidden text-white rounded-3xl">
          Login
        </button>
        <button className="px-8 py-2 bg-[#ab8bd2] lg:block hidden text-white rounded-3xl">
          Try free
        </button>
        <button className="lg:hidden text-xl" onClick={() => open()}>
        <Menu/>
        </button>
      </div>
    </div>
  );
};

export default Header;
