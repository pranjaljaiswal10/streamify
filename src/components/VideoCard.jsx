import { USER_ICON } from "../utils/constant";
import { formatter } from "../utils/helper";


const VideoCard = ({snippet,statistics,thumbnails}) => {
    const {thumbnails:{medium},channelTitle,title}=snippet
   const {viewCount}=statistics
    const logo=thumbnails?thumbnails.default:null
    
  return  (
    <div className="shadow-lg p-2 m-2 w-72 ">
        <img src={medium.url} className="rounded-lg" alt="thumbnail" />
        <div className="flex">
        <img src={logo?logo.url:USER_ICON} alt="" className="rounded-full h-fit w-2/12" />
        <div className="w-10/12 text-xs">
        <h1 className="font-bold  py-2"> {title}</h1>
        <h2>{channelTitle}</h2>
        <h3>{formatter.format(viewCount)} views</h3>
        </div>
        </div>
    </div>
  );
};

export default VideoCard;
