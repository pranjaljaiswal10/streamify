import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";


const VideoContainer = () => {
  const [videoList,setVideoList]=useState([])
  console.log( import.meta.env.VITE_GOOGLE_API_KEY)
 async function getData(){
   const response=await fetch(YOUTUBE_VIDEOS_API)
   const data=await response.json()
   setVideoList(data)
 } 
  useEffect(()=>{
  getData()
  },[])
  return (<>
  {console.log(videoList)}
  </>);
};

export default VideoContainer;
