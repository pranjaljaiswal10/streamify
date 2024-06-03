import { useEffect, useState } from "react";
import { SEARCH_OPTIONS, YOUTUBE_KEYWORD_VIDEO_API } from "../constant";

const useGetExploreVideo = (keyword) => {
  const [videoList, setVideoList] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    getKeyWordVideo();
  }, [page]);

  const getKeyWordVideo = async () => {
    try {
      const response = await fetch(
        YOUTUBE_KEYWORD_VIDEO_API(keyword, nextPageToken),
        SEARCH_OPTIONS
      );
      const json = await response.json();
      console.log(json);
      setVideoList([...videoList, ...json.data]);
      setNextPageToken(json.continuation);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    function handleScroll() {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      if (isBottom) {
        setPage((prevPage) => prevPage + 1);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return videoList;
};

export default useGetExploreVideo;
