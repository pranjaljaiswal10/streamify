import { formatter } from "../utils/helper";


const SuggestionCard = ({channelTitle,publishedTimeText,thumbnail,lengthText,title,viewCount}) => {
    return (
   <div className="flex pb-3 ">
    <div className="relative w-3/12">
   <img src={thumbnail[0].url} alt={title} className="rounded h-20" />
   <small className="absolute top-14 right-0.5 bg-black text-white p-0.5 rounded">{lengthText}</small>
  </div>
   <ul className="pl-3 w-9/12">
   <li className="font-bold text-sm">{title}</li>
   <li  className="text-zinc-600">{channelTitle}</li>
   <li className="inline text-zinc-600">{formatter.format(viewCount)} views</li>
   <li className="pl-3 inline text-zinc-600">{publishedTimeText}</li>
   </ul>
   </div>

  );
};

export default SuggestionCard;
