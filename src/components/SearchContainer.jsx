import { useEffect, useState } from "react";
import {  SEARCH_OPTIONS, YOUTUBE_SEARCH_VIDEO_API } from "../utils/constant";
import SearchCard from "./SearchCard";
import { Link, useSearchParams} from "react-router-dom";

  

const SearchContainer = () => {
    const [searchParams]=useSearchParams()
    const [searchList,setSearchList]=useState([])
    
    
    let searchQuery=encodeURIComponent(searchParams.get("search-query"))
    
    useEffect(()=>{
      async function getSearchData(){
       const response=await fetch(YOUTUBE_SEARCH_VIDEO_API(searchQuery),SEARCH_OPTIONS)
       const json=await response.json()
       setSearchList(json.data)
      }
        getSearchData()
    },[searchQuery])

    console.log(searchList)
  return ( 
    searchList.filter((item)=>item.type==="video").map((item)=>
    <Link to={`/watch?v=${item.videoId}`} key={item.videoId}> <SearchCard {...item}/></Link>
 )
  );
};

export default SearchContainer;
