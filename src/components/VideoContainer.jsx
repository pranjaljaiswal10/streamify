import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";


const VideoContainer = () => {
  const [videoList,setVideoList]=useState([])
 async function getData(){
   const response=await fetch(YOUTUBE_VIDEOS_API)
   const data=await response.json();
  setVideoList(data.items)
 } 
  useEffect(()=>{
  getData()
  },[])
  return (<div className="mx-4 flex flex-wrap">
  {
    videoList.map((item)=>(
      <VideoCard  key={item.id} {...item}/>
    ))
  }
  </div>);
  
};

export default VideoContainer;
