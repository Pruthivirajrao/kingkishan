import React, { useEffect, useState } from "react";
import Marquee from "./Marquee";
import { FaBell, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [placeholderText, setPlaceholderText] = useState("");
  const qty = useSelector(state=>state.cart)
  useEffect(() => {
    let index = 0;
    const text = ["Organic Fruits...", "Dry Fruits...", "Organic Vegies..."];
    const interval = 2000;

    const updatePlaceholder = () => {
      setPlaceholderText(text[index]);
      index = (index + 1) % text.length;
    };

    const typingInterval = setInterval(updatePlaceholder, interval);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden block p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-green-600 mr-2" />
            <b>Hyderabad, Telangana</b>
          </div>
          <div className="p-2 bg-gray-300 rounded-full">
            <FaBell className="text-green-600" />
          </div>
        </div>
        <div className="flex border rounded pl-5">
          <input
            type="text"
            className="outline-none h-12 w-[88%] placeholder-black"
            placeholder={`I'm searching for ${placeholderText}`}
          />
          <button className="h-12 bg-green-600 w-[16%] rounded-r-md flex justify-center items-center">
            <FaSearch className="text-white" />
          </button>
        </div>
      </header>

      {/* All devices */}
      <header className="hidden md:block">
        <Marquee />
        <div className="flex justify-between items-center bg-green-500 px-6 py-2">
          <div>
            <img
              src="https://kingkisanghar.com/assets/images/kisanlogo20.png"
              alt=""
              className="h-12"
            />
          </div>
          <div className="flex items-center">
            <div className="flex w-56 mr-3 bg-white h-10 items-center p-2 rounded">
              <div className="bg-gray-300 p-1 rounded">
                <FaMapMarkerAlt className="text-orange-400" />
              </div>
            </div>
            <div className="flex bg-green-300 items-center h-10 text-white rounded px-3">
              <input
                type="text"
                placeholder={`I'm searching for ${placeholderText}`}
                className="bg-green-300 md:w-40 outline-none lg:w-80 placeholder-white"
              />
              <FaSearch />
            </div>
          </div>
          <div className="flex">
            <div className="border-r px-3 relative">
            <Link to="/cart"><MdOutlineShoppingCart className="text-white text-2xl" /></Link>
            <p className="absolute top-[-6px] bg-white h-4 flex justify-center rounded-full items-center w-4 right-2">{qty.length}</p>
            </div>
            <div className="border-r px-3">
              <CgProfile className="text-white text-2xl" />
            </div>
            <div className="px-3">
              <LuShoppingBag className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
