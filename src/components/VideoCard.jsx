import moment from "moment";
import { USER_ICON } from "../utils/constant";
import { formatter, relativeTime } from "../utils/helper";


const VideoCard = ({snippet,statistics,contentDetails,thumbnail}) => {
    const {thumbnails:{medium},channelTitle,title,publishedAt}=snippet
   const {viewCount}=statistics
   const second=moment.duration(contentDetails.duration).asSeconds()
   const duration=moment.utc(second*1000).format("mm:ss")
   
  return  (
    <div className="shadow-lg p-2 m-2 w-72 grow">
      <div className="relative">
        <img src={medium.url} className="rounded-lg" alt={title} />
        <small className="absolute text-white bottom-3 right-2 font-semibold p-0.5 rounded bg-black opacity-70">{duration}</small>
        </div>
        <div className="flex">
        <img src={thumbnail?thumbnail.url:USER_ICON} alt="" className="rounded-full h-fit w-2/12 mt-2" />
        <ul className="w-10/12 text-xs ml-1">
        <li className="font-bold  py-2 truncate"> {title}</li>
        <li className="text-zinc-700 font-semibold">{channelTitle}</li>
        <li className="text-zinc-600 font-semibold">{`${formatter.format(viewCount)} views . ${relativeTime(publishedAt)}`  }</li>
        </ul>
        </div>
    </div>
  );
};

export default VideoCard;