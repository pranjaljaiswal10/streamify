
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import HomePageShimmer from "./HomePageShimmer";
import useGetHomePageVideo from "../utils/hooks/useGetHomePageVideo";


const VideoContainer = () => {
   const [videoList,channelThumbnail]=useGetHomePageVideo()
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
