import { useSelector } from "react-redux";
import useGetExploreVideo from "../utils/hooks/useGetExploreVideo";
import { Link } from "react-router-dom";
import ButtonCard from "./ButtonCard";


const ButtonContainer = () => {

    const { keywordButton } = useSelector((store) => store.keyword);
    const videoList=useGetExploreVideo(keywordButton)
  
  return (
  <div className={`flex flex-wrap`}>
    {videoList
        .filter(
          (item) =>
            item.type === "video" &&
            item.isLive !== true &&
            item.title.includes(("LIVE" || "live")) === false
        )
        .map((item) => (
          <Link to={`/watch?v=${item.videoId}`} key={item.videoId}>
            <ButtonCard {...item} />
          </Link>
        ))}   

  
  </div>)
};

export default ButtonContainer;
