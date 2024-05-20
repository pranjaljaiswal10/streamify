import {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SEARCH_OPTIONS, YOUTUBE_KEYWORD_VIDEO_API } from "../utils/constant";
import ExploreCard from "./ExploreCard";

const ExploreComponent = () => {
  const { keyword } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [page,setPage]=useState(1)
  useEffect(() => {
    getKeyWordVideo()
  }, [page]);

  const getKeyWordVideo = async () => {
  try{  const response = await fetch(
      YOUTUBE_KEYWORD_VIDEO_API(keyword, nextPageToken),
      SEARCH_OPTIONS
    );
    const json = await response.json();
    console.log(json)
    setVideoList-([...videoList, ...json.data]);
    setNextPageToken(json.continuation);
    }catch(error){
  console.log(error)
    }
  }
  useEffect(() => {
    function handleScroll() {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      if (isBottom) {
        setPage(prevPage=>prevPage+1)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

console.log(videoList)

  return (
    <div className="flex flex-wrap">
      {videoList
        .filter(
          (item) =>
            item.type === "video" &&
            item.isLive !== true &&
            item.title.includes("LIVE" || "live") === false
        )
        .map((item) => (
          <Link to={`/watch?v=${item.videoId}`} key={item.videoId}>
            <ExploreCard {...item} />
          </Link>
        ))}
    </div>
  );
};

export default ExploreComponent;
