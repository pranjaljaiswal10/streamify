import { useEffect, useState } from "react";
import { LOGO, SEARCH_SUGGESTION_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { addData } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { FaArrowLeft } from "react-icons/fa6";
import { GoArrowLeft, } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isVisible,setIsVisisbele]=useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionsList] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const handleSearchClick = () => {
    navigate(`result?search-query=${searchQuery}`);
    setShowSuggestions(false);
  };
  const getSuggestion=async()=>{
   const response = await fetch(SEARCH_SUGGESTION_API(searchQuery));
   const data = await response.json();
   console.log("API CALL")
   setSuggestionsList(data[1]);
   dispatch(
     addData({
       [searchQuery]: data[1],
     })
   );
 }
  
  useEffect(() => {
    let timerId = setTimeout(() => {
      if(searchCache[searchQuery])
        {
          setSuggestionsList(searchCache[searchQuery])
        }
        else{
        getSuggestion(searchQuery);
      }
      }, 300);
      return () => {
        clearTimeout(timerId);
      };
  }, [searchQuery]);

  const handleSearchchange = (e) => {
    setSearchQuery(e.target.value);
    console.log(e.taget.localName)
  };
  const handleToggle = () => {
    dispatch(toggleMenu());
  };

const handleSearchIconClick=()=>{
  setIsVisisbele(true)
}
const handleLeftArrowClick=()=>{
  setIsVisisbele(false)
}

  return (
    
      <nav className="flex sticky top-0 left-0 items-center  w-full justify-between sm:px-6 py-1   shadow-lg z-20 bg-white">
      <div className="logo flex items-center cursor-pointer">
        <GiHamburgerMenu onClick={handleToggle}  className="md:text-3xl sm:text-xl  hover:bg-gray-100 p-1" />
        <Link to="/">
          <img src={LOGO} alt="youtube-logo" className="h-10 md:h-12 md:pl-2" />
        </Link>
      </div>
     {isVisible &&( <div className="mx-6 flex w-80 relative  my-1.5 sm:my-0  ">
        <button className="hidden md:block absolute left-4 top-4" onClick={handleLeftArrowClick}>{<GoArrowLeft/>}</button>
          <input
            type="text "
            className=
            {`px-5 w-full border border-gray-400 py-0.5 pl-8 sm:py-2  ${isVisible?"rounded-l-full":"rounded-full"}`}
            value={searchQuery}
            onChange={handleSearchchange}
            placeholder="Search...."
            onFocus={() => setShowSuggestions(true)}
           
          />
          <button className="absolute right-16 top-4" onClick={()=>{setSearchQuery("")}}>{<AiOutlineClose/>}</button>
         {isVisible && (<button
            className="border border-gray-400 px-5 py-0.5 sm:py-2 rounded-r-full bg-gray-100"
            onClick={handleSearchClick}
          >
            🔍
          </button>)}
          <ul
            className="fixed z-20 bg-slate-50 w-1/4"
           
          >
            {showSuggestions &&
              suggestionList.map((item) => (
                  <Link to={`/result?search-query=${item}`}  key={item}>
                <li className="list-none pb-2">
                    <FcSearch className="inline" /> {item}
                </li>
                  </Link>
              ))}
          </ul>
      </div>)
}
     {!isVisible && <div className="">
        <button onClick={handleSearchIconClick}>{<FaSearch/>}</button>
      </div>}
      <div className="cursor-pointer">
        <FaUserCircle size={32}  className=""/>
      </div>
      </nav>
  );
};

export default Header;
