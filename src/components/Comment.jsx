import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { formatter } from "../utils/helper";

const Comment = ({message}) => {
   const {authorDisplayName,authorProfileImageUrl,likeCount,textOriginal,publishedAt}=message
   return(
  <div className="flex">
  
     <img src={authorProfileImageUrl} alt={authorDisplayName} className="rounded-full w-10 h-10 pt-1" />
     <div className="px-3">
      <strong>{authorDisplayName}</strong><span className="text-xs text-gray-600 px-3">{publishedAt}</span>
      <p className="text-sm py-1 break-all">{textOriginal}</p>
     <span><AiOutlineLike className="inline cursor-pointer"/><span className="text-xs text-gray-600">{formatter.format(likeCount)}</span></span>
     <span className="px-4"><AiOutlineDislike className="inline cursor-pointer"/></span>
     </div>
    </div>
   )
};

export default Comment;
