import { Link, useParams } from "react-router-dom";
import ExploreCard from "./ExploreCard";
import { useSelector } from "react-redux";
import useGetExploreVideo from "../utils/hooks/useGetExploreVideo";
import HomePageShimmer from "../components/Shimmer/HomePageShimmer";

const ExploreComponent = () => {
  const isToggleBar = useSelector((store) => store.menu.isMenuOpen);
  let { keyword } = useParams();
  const videoList = useGetExploreVideo(keyword);
  console.log(videoList);
  if (videoList.length === 0)
    return (
      <div className={`${isToggleBar ? "ml-56" : "ml-6"}`}>
        <HomePageShimmer />
      </div>
    );
  return (
    <div className={`flex flex-wrap ${isToggleBar ? "ml-56" : "ml-6"}`}>
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
