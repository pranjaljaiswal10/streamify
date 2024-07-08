import { useEffect, useState } from "react";
import { LOGO, SEARCH_SUGGESTION_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { addData } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { GoArrowLeft } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isVisible, setIsVisisbele] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionsList] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const handleSearchClick = () => {
    navigate(`result?search-query=${searchQuery}`);
    setShowSuggestions(false);
  };
  const getSuggestion = async () => {
    const response = await fetch(SEARCH_SUGGESTION_API(searchQuery));
    const data = await response.json();
    console.log("API CALL");
    setSuggestionsList(data[1]);
    dispatch(
      addData({
        [searchQuery]: data[1],
      })
    );
  };

  useEffect(() => {
    let timerId = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestionsList(searchCache[searchQuery]);
      } else {
        getSuggestion(searchQuery);
      }
    }, 300);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  const handleSearchchange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const handleSearchIconClick = () => {
    setIsVisisbele(true);
  };
  const handleLeftArrowClick = () => {
    setIsVisisbele(false);
  };

  const handleSearchSuggestionClick = (e) => {
    const { innerText } = e.target;
    navigate(`result?search-query=${innerText}`);
    setShowSuggestions(false);
    setSearchQuery(innerText);
  };

  return (
    <nav className="flex sticky top-0 left-0  h-14 w-full justify-between sm:px-6 px-3   shadow-lg z-20 bg-white">
      <div className="flex items-center gap-2 py-3 ">
        <div className="  text-base md:text-2xl cursor-pointer rounded-full hover:bg-gray-100 p-1">
          <GiHamburgerMenu onClick={handleToggle} />
        </div>
        {!isVisible && (
          <Link to="/">
            <img src={LOGO} alt="youtube-logo " className=" h-12 md:pl-2" />
          </Link>
        )}
      </div>

      {isVisible && (
        <div className="lg:mx-8 mx-0 md:hidden block  w-3/5 md:4/5 relative ">
          <div className="flex items-center mt-4">
            <button onClick={handleLeftArrowClick} className="absolute left-2">
              {<GoArrowLeft />}
            </button>
            <input
              type="text "
              className={` w-full border border-gray-400 sm:py-1 pl-6  rounded-l-full`}
              value={searchQuery}
              placeholder="Search...."
              onChange={handleSearchchange}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />

            <button
              className="border border-gray-400 px-5 py-1 sm:py-2 rounded-r-full bg-gray-100"
              onClick={handleSearchClick}
            >
              {<FaSearch />}
            </button>
            {searchQuery !== "" && (
              <button
                className="absolute top-5 right-16"
                onClick={() => setSearchQuery("")}
              >
                {<AiOutlineClose />}
              </button>
            )}
            <ul className="fixed z-20 bg-slate-50 top-12 w-[290px] pr-8">
              {showSuggestions &&
                suggestionList.map((item) => (
                  <Link to={`/result?search-query=${item}`} key={item}>
                    <li className="list-none pb-2 ">
                      <FcSearch className="inline" /> {item}
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
      )}

      <div className="mx-8  w-1/3 relative hidden  md:block items-center">
        <div className="flex mt-2.5">
          <input
            type="text "
            className={` w-full border border-gray-400 sm:py-1 pl-3  rounded-l-full`}
            value={searchQuery}
            placeholder="Search...."
            onChange={handleSearchchange}
            onFocus={() => setShowSuggestions(true)}
          />
          <button
            className="border border-gray-400 px-5  rounded-r-full bg-gray-100"
            onClick={handleSearchClick}
          >
            {<FaSearch />}
          </button>
          {searchQuery !== "" && (
            <button
              className="absolute right-16 top-5"
              onClick={() => setSearchQuery("")}
            >
              {<AiOutlineClose />}
            </button>
          )}
          <ul
            className="fixed z-20 bg-slate-50 top-12 w-[430px] pr-8"
            onClick={(e) => handleSearchSuggestionClick(e)}
          >
            {showSuggestions &&
              suggestionList.map((item) => (
                <li className="list-none pb-2 " key={item}>
                  <FcSearch className="inline" /> {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center ">
        {!isVisible && (
          <button
            className="pr-12 block md:hidden"
            onClick={handleSearchIconClick}
          >
            <FaSearch />
          </button>
        )}
        <div className=" text-base md:text-2xl cursor-pointer  hover:bg-gray-100  ">
          <FaUserCircle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
