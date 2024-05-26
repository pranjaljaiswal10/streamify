import { useEffect, useState } from "react";
import { SEARCH_OPTIONS, YOUTUBE_SEARCH_VIDEO_API } from "../utils/constant";
import SearchCard from "./SearchCard";
import { Link, useSearchParams } from "react-router-dom";
import {  ImSpinner8 } from "react-icons/im";
import { useSelector } from "react-redux";

const SearchContainer = () => {
  const [searchParams] = useSearchParams();
  const [searchList, setSearchList] = useState([]);
  const toggleBar=useSelector((store)=>store.menu.isMenuOpen)
  const searchQuery = encodeURIComponent(searchParams.get("search-query"));

  useEffect(() => {
    async function getSearchData() {
      const response = await fetch(
        YOUTUBE_SEARCH_VIDEO_API(searchQuery),
        SEARCH_OPTIONS
      );
      const json = await response.json();
      setSearchList(json.data);
    }
    getSearchData();
  }, [searchQuery]);


  return (
    searchList.length===0?(
    <div className=" flex flex-wrap justify-center items-center h-screen w-screen">
      <ImSpinner8 className="w-16 h-16 text-gray-600 animate-spin fill-blue-600" />
    </div>):(

    <div className={`flex flex-col item-center  mt-4 ${toggleBar?"ml-56 lg:opacity-100 lg:bg-white  opacity-50 bg-gray-200":"md:ml-20 mx-8 "}`}>
      {searchList
        .filter((item) => item.type === "video")
        .map((item) => (
          <Link to={`/watch?v=${item.videoId}`} key={item.videoId}>
            <SearchCard {...item} />
          </Link>
        ))}
    </div>
    )
  );
};

export default SearchContainer;
