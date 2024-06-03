import { Link, useSearchParams } from "react-router-dom";
import SuggestionCard from "./SuggestionCard";
import useGetSuggestionVideo from "../utils/hooks/useGetSuggestionVideo";

const SuggestionVideoContainer = () => {
  const [searchParams] = useSearchParams();
  const relatedVideoIdList=useGetSuggestionVideo(searchParams)

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
