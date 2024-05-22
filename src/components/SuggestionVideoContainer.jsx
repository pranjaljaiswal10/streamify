import { useEffect, useState } from "react";
import {
  RELATED_OPTIONS,
  YOUTUBE_RELATED_VIDEOS_ID_API,
} from "../utils/constant";
import { Link, useSearchParams } from "react-router-dom";
import SuggestionCard from "./SuggestionCard";
import { useDispatch } from "react-redux";
import { addData } from "../utils/searchSlice";

const SuggestionVideoContainer = () => {
  const dispatch=useDispatch()
  const [searchParams] = useSearchParams();
  const [relatedVideoIdList, setRelatedVideoIdList] = useState(null);
  useEffect(() => {
    const getSuggestionVideo = async () => {
      const response = await fetch(
        YOUTUBE_RELATED_VIDEOS_ID_API(searchParams.get("v")),
        RELATED_OPTIONS
      );
      const json = await response.json();
      setRelatedVideoIdList(json.data);
      dispatch(addData(json.data))
    };
    getSuggestionVideo(searchParams.get("v"));
  }, [searchParams,dispatch]);

console.log(relatedVideoIdList)

  if (!relatedVideoIdList) return;

  return (
    <>
      {relatedVideoIdList.filter((item)=>item.type==="video"&& item.isLiveContent!==true).map((item) => (
        <Link to={`/watch?v=${item.videoId}`} key={item.videoId}>
          <SuggestionCard {...item} />
        </Link>
      ))}
    </>
  );
};

export default SuggestionVideoContainer;
