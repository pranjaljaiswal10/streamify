import { useCallback, useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_DETAILS_API, YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const [channelId,setChannelId]=useState([]);
  const [channelThumbnail,setChannelThumbnail]=useState([]);
 
  async function getVideos() {
    try{
      const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVideoList(data.items);
    setChannelId(data.items.map((item)=>item.snippet.channelId))
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    getVideos()
  }, []);

 const getChannelDetail=useCallback(async()=>{
  const res=await fetch(YOUTUBE_CHANNEL_DETAILS_API(channelId.toString())) //id parameter accept comma seperated value
  const data= await res.json();
 data.items && setChannelThumbnail(data.items.map((item)=>item.snippet.thumbnails))
 },[channelId])


  useEffect(()=>{
  getChannelDetail()
  },[getChannelDetail])



  return (
    <div className="mx-4 flex flex-wrap">
      {videoList.map((item,index) => (
        <Link to={`/watch?v=${item.id}`}  key={item.id}>
          <VideoCard {...item}  thumbnails={channelThumbnail[index]}  />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
