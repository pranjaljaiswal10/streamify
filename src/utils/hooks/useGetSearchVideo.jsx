import { useEffect, useState } from "react";
import { SEARCH_OPTIONS, YOUTUBE_SEARCH_VIDEO_API } from "../constant";


const useGetSearchVideo = (searchQuery) => {
    const [searchList, setSearchList] = useState([]);
    
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
  return  searchList;
};

export default useGetSearchVideo;
