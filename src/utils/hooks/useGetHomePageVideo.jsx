import { useCallback, useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_DETAILS_API, YOUTUBE_VIDEOS_API } from "../constant";

const useGetHomePageVideo = () => {
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

  return [videoList, channelThumbnail];
};

export default useGetHomePageVideo;
