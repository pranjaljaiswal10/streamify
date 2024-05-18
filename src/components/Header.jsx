import { useEffect, useState } from "react";
import { LOGO, SEARCH_SUGGESTION_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { addData } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { FcSearch } from "react-icons/fc";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionsList] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const handleSearchClick = () => {
    navigate(`result?search-query=${searchCache}`);
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
  }, [searchQuery,searchCache]);

  const handleSearchchange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
    
      <nav className="flex  items-center   w-full justify-between px-6 py-1 st m-2  shadow-lg">
      <div className="logo flex items-center cursor-pointer">
        <GiHamburgerMenu onClick={handleToggle} size={32} />
        <Link to="/">
          <img src={LOGO} alt="youtube-logo" className="h-12 mx-6" />
        </Link>
      </div>
      <div className="mx-6 w-1/2  ">
          <input
            type="text "
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={handleSearchchange}
            placeholder="Search...."
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            // onMouseEnter={() => setShowSuggestions(true)}
            // onMouseLeave={() => setShowSuggestions(false)}
          />
          <button
            className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
            onClick={handleSearchClick}
          >
            🔍
          </button>
          <ul
            className="fixed z-20 bg-slate-50 w-1/4"
            onMouseEnter={() => {
              setShowSuggestions(true);
            }}
            onMouseLeave={() => {
              setShowSuggestions(false);
            }}
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
      
      </div>
      <div className="cursor-pointer">
        <FaUserCircle size={32} />
      </div>
      </nav>
    
    </>
  );
};

export default Header;
