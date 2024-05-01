import { useEffect, useState } from "react";
import {
  LOGO,
  SEARCH_SUGGESTION_API,
  SUGGESTION_OPTION,
} from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { addData } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { FcSearch } from "react-icons/fc";


const Header = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search)
  const handleSearchClick=()=>{
   navigate(`result?search-query=${searchCache}`)
   setShowSuggestions(false)
  }
  useEffect(() => {
    const getSuggestion = async () => {
      const response = await fetch(
        SEARCH_SUGGESTION_API(searchQuery),
        SUGGESTION_OPTION
      );
      const data = await response.json();
      dispatch(addData(data));
    };
    let timerId = setTimeout(() => {
      getSuggestion();
    }, 600);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery, dispatch]);

  const handleSearchchange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  console.log(searchCache);

  return (
    <div className="flex items-center justify-between px-6 py-1  m-2  shadow-lg">
      <div className="logo flex items-center cursor-pointer">
        <GiHamburgerMenu onClick={handleToggle} size={32} />
        <img src={LOGO} alt="" className="h-12 mx-6" />
      </div>
      <div className="mx-6 w-1/2  ">
        <div>
          <input
            type="text "
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={handleSearchchange}
            placeholder="Search...."
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onMouseEnter={() => setShowSuggestions(true)}
            onMouseLeave={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100" onClick={handleSearchClick}>
            🔍
          </button>
          <ul
            className="fixed bg-slate-50 w-1/4"
            onMouseEnter={() => {
              setShowSuggestions(true);
            }}
            onMouseLeave={() => {
              setShowSuggestions(false);
            }}
          >
            {showSuggestions &&
              searchCache.results.map((item) => (
                <Link to={`/result?search-query=${item}`} key={item}>
                  <li className="list-none pb-2">
                    {" "}
                    <FcSearch className="inline" /> {item}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
      <div className="cursor-pointer">
        <FaUserCircle size={32} />
      </div>
    </div>
  );
};

export default Header;
