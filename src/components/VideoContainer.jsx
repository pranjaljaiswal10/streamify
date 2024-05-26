import { useCallback, useEffect, useState } from "react";
import {
  YOUTUBE_CHANNEL_DETAILS_API,
  YOUTUBE_VIDEOS_API,
} from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import HomePageShimmer from "./HomePageShimmer";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const [channelId, setChannelId] = useState([]);
  const [channelThumbnail, setChannelThumbnail] = useState([]);
  const [token, setToken] = useState("");
  const [page, setPage] = useState(1);

  const getChannelDetail = useCallback(async () => {
    const res = await fetch(YOUTUBE_CHANNEL_DETAILS_API(channelId.toString())); //id parameter accept comma seperated value
    const data = await res.json();
    data.items &&
      setChannelThumbnail((prevThumbnail) => [
        ...prevThumbnail,
        ...data.items.map((item) => item.snippet.thumbnails.medium),
      ]);
  }, [channelId]);

  useEffect(() => {
    getChannelDetail();
  }, [getChannelDetail]);

  useEffect(() => {
    getVideos();
  }, [page]);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API(token));
      const data = await response.json();
      setVideoList([...videoList, ...data.items]);
      setToken(data.nextPageToken);
      setChannelId((prevChannel) => [
        ...prevChannel,
        ...data.items.map((item) => item.snippet.channelId),
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return videoList.length === 0 ? (
    <HomePageShimmer />
  ) : (
    <div className="sm:grid flex flex-wrap justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videoList.map((item, index) => (
        <Link to={`/watch?v=${item.id}`} key={item.id}>
          <VideoCard {...item} thumbnail={channelThumbnail[index]} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
