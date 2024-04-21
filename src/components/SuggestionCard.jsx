import { formatter } from "../utils/helper";


const SuggestionCard = ({author,number_of_views,published_time,thumbnails,title,video_length}) => {
    return (
   <div className="flex pb-3 ">
    <div className="relative w-3/12">
   <img src={thumbnails[0].url} alt={title} className="rounded h-20" />
   <small className="absolute top-14 right-0.5 bg-black text-white p-0.5 rounded">{video_length}</small>
  </div>
   <ul className="pl-3 w-9/12">
   <li className="font-bold text-sm">{title}</li>
   <li  className="text-zinc-600">{author}</li>
   <li className="inline text-zinc-600">{formatter.format(number_of_views)} views</li>
   <li className="pl-3 inline text-zinc-600">{published_time}</li>
   </ul>
   </div>

  );
};

export default SuggestionCard;
