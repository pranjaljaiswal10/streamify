import { useState } from "react";
import { LOGO } from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery,setSearchQuery]=useState("")
  const handleSearchchange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <nav className="flex items-center justify-between px-6 py-1 st m-2  shadow-lg">
      <div className="logo flex items-center cursor-pointer">
        <GiHamburgerMenu onClick={handleToggle} size={32}/>
        <Link to="/">
        <img src={LOGO} alt="youtube-logo" className="h-12 mx-6" />
        </Link>
      </div>
      <div className="mx-6 w-1/2  ">
        <div>
          <input
            type="text "
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={handleSearchchange}
            placeholder="Search...."
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
      </div>
      <div className="cursor-pointer">
       <FaUserCircle size={32}/>
      </div>
    </nav>
  );
};

export default Header;
