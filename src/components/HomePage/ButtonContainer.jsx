import { useSelector } from "react-redux";
import useGetExploreVideo from "../../utils/hooks/useGetExploreVideo";
import { Link } from "react-router-dom";
import ButtonCard from "./ButtonCard";
import HomePageShimmer from "../Shimmer/HomePageShimmer";

const ButtonContainer = () => {
  const { keywordButton } = useSelector((store) => store.keyword);
  const videoList = useGetExploreVideo(keywordButton);
  if(videoList.length==0) return <HomePageShimmer/>
  return (
    <div className={`flex flex-wrap justify-center md:justify-start`}>
      {videoList
        .filter(
          (item) =>
            item.type === "video" &&
            item.isLive !== true &&
            item.title.includes("LIVE" || "live") === false
        )
        .map((item) => (
          <Link to={`/watch?v=${item.videoId}`} key={item.videoId}>
            <ButtonCard {...item} />
          </Link>
        ))}
    </div>
  );
};

export default ButtonContainer;
