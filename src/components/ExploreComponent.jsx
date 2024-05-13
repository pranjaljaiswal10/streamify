import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SEARCH_OPTIONS, YOUTUBE_KEYWORD_VIDEO_API } from "../utils/constant";
import ExploreCard from "./ExploreCard";

const ExploreComponent = () => {
  const { keyword } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    async function getKeywordVideo() {
      const response = await fetch(
        YOUTUBE_KEYWORD_VIDEO_API(keyword),
        SEARCH_OPTIONS
      );
      const json = await response.json();
      console.log(json);
      setNextPageToken(json.continuation);
      setVideoList(json.data);
    }
    getKeywordVideo();
  }, [keyword]);

  const getNextKeyWordVideo = useCallback(async () => {
    const response = await fetch(
      YOUTUBE_KEYWORD_VIDEO_API(keyword, nextPageToken),
      SEARCH_OPTIONS
    );
    const json = await response.json();
    setVideoList((prevVideList) => [...prevVideList, ...json.data]);
    setNextPageToken(json.continuation);
  }, [keyword, nextPageToken]);
  useEffect(() => {
    function handleScroll() {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      if (isBottom) {
        getNextKeyWordVideo();
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getNextKeyWordVideo]);

  return (
    <div className="flex flex-wrap">
      {videoList
        .filter((item) => item.type === "video" && item.isLive !== true && item.title.includes("LIVE"||"live")===false)
        .map((item) => (
          <Link to={`/watch?v=${item.videoId}`} key={item.videoId}>
            <ExploreCard {...item} />
          </Link>
        ))}
    </div>
  );
};

export default ExploreComponent;
