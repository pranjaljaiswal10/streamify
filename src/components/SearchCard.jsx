import { formatter } from "../utils/helper";


const SearchCard = ({channelThumbnail,lengthText,channelTitle,description,publishedTimeText,title,thumbnail,viewCount}) => {
  console.log(thumbnail)
  return (<div className="flex py-2">
    <div className="relative w-3/12">
<img src={thumbnail[0].url} className="w-full" alt="" />
<small className="absolute bottom-1 right-1 bg-black text-white p-0.5 rounded-sm">{lengthText}</small>
</div>
<div className="text-sm space-y-2 w-9/12 pl-4">
  <strong>{title}</strong>
  <div className="pt-0">
  <span className="pl-2">{`${formatter.format(viewCount)} views ${publishedTimeText}`}</span>
  </div>
  <div className="flex items-center">
  <img src={channelThumbnail[0].url} className="rounded-full h-12 w-12" alt="" />
  <span className="text-slate-600 font-semibold pl-3">{channelTitle}</span>
  </div>
  <p>{description}</p>
</div>
  </div>);
};

export default SearchCard;
