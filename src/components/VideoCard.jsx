import moment from "moment";
import { USER_ICON } from "../utils/constant";
import { formatter, relativeTime } from "../utils/helper";


const VideoCard = ({snippet,statistics,contentDetails,thumbnail}) => {
    const {thumbnails:{medium},channelTitle,title,publishedAt}=snippet
   const {viewCount}=statistics
   const second=moment.duration(contentDetails.duration).asSeconds()
   const duration=moment.utc(second*1000).format("mm:ss")
   
  return  (
    <div className="hover:shadow-lg  p-2 sm:m-2">
      <div className="relative">
        <img src={medium.url} className="rounded-lg" alt={title} />
        <small className=" px-1   opacity-80 bg-black text-white rounded-sm  font-bold absolute bottom-2 right-2">{duration}</small>
       </div>
        <div className="flex py-1">
        <img src={thumbnail?thumbnail.url:USER_ICON} alt="" className="rounded-full h-9 w-9 mr-2" />
        <ul className=" text-xs w-64">
        <li className="font-bold  py-2 pb-1 text-sm " > {title}</li>
        <li className="text-gray-600 ">{channelTitle}</li>
        <li className="text-gray-600 "><span>{formatter.format(viewCount)}views </span>{relativeTime(publishedAt)} </li>
        </ul>
        </div>
    </div>
  );
};

export default VideoCard;