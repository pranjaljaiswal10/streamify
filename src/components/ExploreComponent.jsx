import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { KEYWORD_OPTIONS, YOUTUBE_SEARCH_BY_KEYWORD } from "../utils/constant";
import ExploreCard from "./ExploreCard";


const ExploreComponent = () => {
    const {keyword}=useParams()
    const [videoList,setVideoList]=useState(null)
    useEffect(()=>{
        async function getKeywordVideo(){
            const response=await fetch(YOUTUBE_SEARCH_BY_KEYWORD(keyword),KEYWORD_OPTIONS)
            const data=await response.json()
            setVideoList(data)
        }
     getKeywordVideo()
    },[keyword])
  return (
    videoList.map((item)=><Link to={`/watch?v=${item.videoId}`} key={item.id}>
        <ExploreCard {...item}/>
    </Link>)
  );
};

export default ExploreComponent;
