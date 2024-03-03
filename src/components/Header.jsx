import { useState } from "react";
import { LOGO } from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";


const Header = () => {
  const [searchQuery,setSearchQuery]=useState("")
 const dispatch=useDispatch()
 const handleToggle=()=>{
  dispatch(toggleMenu())
 }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
     <div className="logo flex col-span-1">
    <img className="h-8 cursor-pointer" onClick={handleToggle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/48px-Hamburger_icon.svg.png" alt="" />
      <img src={LOGO} alt="youtube-logo" className="h-8 mx-2" />
     </div>
     <div className="col-span-10 px-10">
    <div >
      <input type="text "  className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" value={searchQuery} placeholder="Search...." onChange={(e)=>setSearchQuery(e.target.value)}
      />
      <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
    </div>
    </div>
    <div className="col-span-1">
    <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" className="h-8" alt="" />
    </div>
    </div>
  )
};

export default Header;
