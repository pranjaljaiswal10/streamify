import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/constant";
import WatchVideoButtonList from "./WatchVideoButtonList";
import WatchvideoDescription from "./WatchvideoDescription";


const WatchVideoDetailContainer = ({videoId}) => {
   const [videoDetail,setVideoDetail]=useState(null)
  useEffect(()=>{
    const getVideoDetail=async()=>{
      try{
     const response=await fetch(YOUTUBE_VIDEO_DETAILS_API(videoId))
     const data=await response.json()
     setVideoDetail(data.items[0])
      }catch(error){
        console.error(error)
      }
    }
  getVideoDetail()
  },[videoId])



if(!videoDetail) return

const {snippet,statistics}=videoDetail
console.log(videoDetail)
  return (
    <>
  <h1>{snippet.title}</h1>
  <h2>{snippet.channelTitle}</h2>
  <WatchVideoButtonList channelId={snippet.channelId} {...statistics}/>
  <WatchvideoDescription  {...snippet} {...statistics} />
    </>
  );
};

export default WatchVideoDetailContainer;
