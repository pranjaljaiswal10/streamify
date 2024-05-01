import { useEffect, useState } from "react";
import { RELATED_OPTIONS, YOUTUBE_RELATED_VIDEOS_ID_API } from "../utils/constant";
import { Link, useSearchParams } from "react-router-dom";
import SuggestionCard from "./SuggestionCard";


const SuggestionVideoContainer = () => {
  const [searchParams]=useSearchParams()
  const [relatedVideoIdList,setRelatedVideoIdList]=useState(null)
  useEffect(()=>{
    
 
    const getSuggestionVideo=async()=>{
      const response=await fetch(YOUTUBE_RELATED_VIDEOS_ID_API(searchParams.get('v')),RELATED_OPTIONS)
      const json=await response.json()
      console.log(json)
      setRelatedVideoIdList(json.data)
    }
    getSuggestionVideo(searchParams.get("v"))
  },[searchParams])

  
if(!relatedVideoIdList) return
console.log(relatedVideoIdList)
  return (<>
    {
      
      relatedVideoIdList.map((item)=>
      <Link to={`/watch?v=${item.videoId}`} key={item.videoId} >
      <SuggestionCard {...item}/>
      </Link>
      )
}
  </>);
};

export default SuggestionVideoContainer;
