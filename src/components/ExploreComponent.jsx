import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {  SEARCH_OPTIONS, YOUTUBE_KEYWORD_VIDEO_API  } from "../utils/constant";
import ExploreCard from "./ExploreCard";


const ExploreComponent = () => {
    const {keyword}=useParams()
    console.log(keyword)
    const [videoList,setVideoList]=useState([])
    useEffect(()=>{
        async function getKeywordVideo(){
            const response=await fetch(YOUTUBE_KEYWORD_VIDEO_API(keyword),SEARCH_OPTIONS)
            const json=await response.json()
            setVideoList(json.data)
        }
     getKeywordVideo()
    },[keyword])

    console.log(videoList)
  return (
    <div className="flex flex-wrap">
  {  videoList.filter((item)=>item.type==="video" &&item.isLive!==true).map((item)=>
    <Link to={`/watch?v=${item.videoId}`} key={item.videoId}>
        <ExploreCard {...item}/>
    </Link>)
}
    </div>
  );
};

export default ExploreComponent;
