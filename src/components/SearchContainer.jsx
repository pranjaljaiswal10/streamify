import { useEffect, useState } from "react";
import { OPTIONS, YOUTUBE_SEARCH_VIDEO_API } from "../utils/constant";
import SearchCard from "./SearchCard";
import { Link, useSearchParams} from "react-router-dom";

  

const SearchContainer = () => {
    const [searchParams]=useSearchParams()
    const [searchList,setSearchList]=useState([])
    let url=encodeURIComponent(searchParams.get("search-query"))
    
    useEffect(()=>{
    async function getSearchData(){
     const response=await fetch(YOUTUBE_SEARCH_VIDEO_API(url),OPTIONS)
     const data=await response.json()
    console.log(data)
    }
        getSearchData()
    },[url])
  return ( 
    searchList.map((item)=>
    <Link to={`/watch?v=${item.id}`} key={item.id}>
    <SearchCard   {...item}/>
    </Link>
)
  );
};

export default SearchContainer;
