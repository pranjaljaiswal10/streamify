import { formatter } from "../utils/helper";

const SearchCard = ({
  channelThumbnail,
  lengthText,
  channelTitle,
  description,
  publishedTimeText,
  title,
  thumbnail,
  viewCount,
}) => {

  return (
    <div className="flex flex-col  sm:flex-row my-4">
      <div className="relative md:w-3/12 ">
        <img src={thumbnail[0].url} className=" rounded-lg w-full" alt="" />
        <small className="absolute bottom-1 right-1 bg-black text-white p-1 rounded">
          {lengthText}
        </small>
      </div>
      <div className="  md:w-9/12 pl-4 ">
        <strong className="">{title}</strong>
          <small className="pl-2 block text-slate-400 font-semibold text-sm">{formatter.format(
            viewCount
          )} • views {publishedTimeText}</small>
      
        <div className="flex items-center my-4">
          <img
            src={channelThumbnail[0].url}
            className="rounded-full md:h-8 w-8" 
            alt=""
          />
          <span className="text-slate-600 font-semibold text-sm pl-3">
            {channelTitle}
          </span>
        </div>
        <p className="hidden md:block text-sm truncate">{description}</p>
      </div>
    </div>
  );
};

export default SearchCard;
