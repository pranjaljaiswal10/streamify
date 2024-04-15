import { useEffect, useState } from "react";
import { YOUTUBE_RELATED_VIDEOS_ID_API } from "../utils/constant";
import { useSearchParams } from "react-router-dom";


const SuggestionVideoContainer = () => {
  const [searchParams]=useSearchParams()
  const [relatedVideoIdList,setRelatedVideoIdList]=useState(null)

  useEffect(()=>{
    const getSuggestionVideo=async()=>{
      const response=await fetch(YOUTUBE_RELATED_VIDEOS_ID_API(searchParams.get("v")))
      const data=await response.json()
      // setVideoList(data.items)
      console.log(data)
    }
    getSuggestionVideo(searchParams.get("v"))
  },[searchParams])
  return (<>

  </>);
};

export default SuggestionVideoContainer;
