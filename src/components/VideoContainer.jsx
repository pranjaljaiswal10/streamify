import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_DETAILS_API, YOUTUBE_SEARCH_BY_KEYWORD, YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const [channelId,setChannelId]=useState([]);
  async function getVideos() {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVideoList(data.items);
    setChannelId(data.items.map((item)=>item.snippet.channelId))
  }
  useEffect(() => {
    getVideos()
  }, []);
  useEffect(()=>{
    if(channelId.length>0)
    {
    getChannelDetail()
    }
  },[getChannelDetail,channelId])
 async function getChannelDetail(){
  const response=await fetch(YOUTUBE_CHANNEL_DETAILS_API(channelId.toString()))
 const data=await response.json()
 }
 console.log(channelId)
  return (
    <div className="mx-4 flex flex-wrap">
      {videoList.map((item) => (
        <Link to={`/watch?v=${item.id}`} key={item.id}>
          <VideoCard {...item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
