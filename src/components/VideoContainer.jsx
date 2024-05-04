import { useCallback, useEffect, useState } from "react";
import {
  YOUTUBE_CHANNEL_DETAILS_API,
  YOUTUBE_VIDEOS_API,
} from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const [channelId, setChannelId] = useState([]);
  const [channelThumbnail, setChannelThumbnail] = useState([]);
  const [token, setToken] = useState("");
 
  
  const getVideos =useCallback(async()=> {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API(token));
      const data = await response.json();
      setVideoList(prevVideoList=>[...prevVideoList,...data.items]);
      setChannelId(prevChannel=>[...prevChannel,...data.items.map((item) =>item.snippet.channelId)]);
      setToken(data.nextPageToken)
    } catch (error) {
      console.log(error);
    }
  },[token])
  
  
  useEffect(() => {
  async function getFirstPageVideo(){
     try{
    const response=await fetch(YOUTUBE_VIDEOS_API())
     const data=await response.json()
     setVideoList(data.items)
     setToken(data.nextPageToken);
     setChannelId(data.items.map((item) =>item.snippet.channelId))
     console.log(data)
    }catch(error){
      console.log(error)
      }
  }
    getFirstPageVideo();
  }, []);


  const getChannelDetail = useCallback(async () => {
    const res = await fetch(YOUTUBE_CHANNEL_DETAILS_API(channelId.toString())); //id parameter accept comma seperated value
    const data = await res.json();
    data.items &&
      setChannelThumbnail(prevThumbnail=>[...prevThumbnail,...data.items.map((item) => item.snippet.thumbnails.medium)]);
  }, [channelId]);

  useEffect(() => {
    getChannelDetail();
  }, [getChannelDetail]);

  useEffect(() => {
    function handleScoll() {
      const isbottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      if (isbottom) {
       getVideos()
      }
    }
    window.addEventListener("scroll", handleScoll);
    return () => {
      window.removeEventListener("scroll", handleScoll);
    };
  }, [getVideos]);

  console.log(videoList)
  return (
    <div className="flex flex-wrap">
      {videoList.map((item, index) => (
        <Link to={`/watch?v=${item.id}`} key={item.id}>
          <VideoCard {...item} thumbnail={channelThumbnail[index]} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
