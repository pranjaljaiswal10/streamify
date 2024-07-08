import { useEffect, useState } from "react";
import { SEARCH_OPTIONS, YOUTUBE_KEYWORD_VIDEO_API } from "../constant";


const useGetExploreVideo = (keyword) => {
  
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    
    getKeyWordVideo();
  }, [keyword]);
  const getKeyWordVideo = async () => {
    try {
      const response = await fetch(
        YOUTUBE_KEYWORD_VIDEO_API(keyword),
        SEARCH_OPTIONS
      );
      const json = await response.json();
  
      setVideoList(json.data);
    } catch (error) {
      console.log(error);
    }
  };
  return videoList;
}
export default useGetExploreVideo;
