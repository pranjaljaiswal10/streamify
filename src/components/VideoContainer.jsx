import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


const VideoContainer = () => {
  const [videoList,setVideoList]=useState([])
 async function getData(){
   const response=await fetch(YOUTUBE_VIDEOS_API)
   const data=await response.json();
   console.log(data,import.meta.env.VITE_GOOGLE_API_KEY)
  setVideoList(data.items)
 } 
  useEffect(()=>{
  getData()
  },[])
  return (
  <div className="mx-4 flex flex-wrap">
    
  {
    videoList.map((item)=>(
      <Link to={`/watch?v=${item.id}`} key={item.id}>
      <VideoCard  {...item}/>
      </Link>
    ))
  }
  </div>);
  
};

export default VideoContainer;
