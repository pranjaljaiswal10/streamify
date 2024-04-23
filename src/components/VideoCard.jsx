import { USER_ICON } from "../utils/constant";
import { formatter } from "../utils/helper";


const VideoCard = ({snippet,statistics,contentDetails,thumbnail}) => {
    const {thumbnails:{medium},channelTitle,title}=snippet
   const {viewCount}=statistics
   console.log(thumbnail)
    
  return  (
    <div className="shadow-lg p-2 m-2 w-72 ">
        <img src={medium.url} className="rounded-lg" alt="thumbnail" />
        <div className="flex">
        <img src={thumbnail?thumbnail.url:USER_ICON} alt="" className="rounded-full h-fit w-2/12" />
        {/* <small>{contentDetails}</small> */}
        <ul className="w-10/12 text-xs">
        <li className="font-bold  py-2"> {title}</li>
        <li>{channelTitle}</li>
        <li>{formatter.format(viewCount)} views</li>
        </ul>
        </div>
    </div>
  );
};

export default VideoCard;