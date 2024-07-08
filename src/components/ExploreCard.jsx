import { formatter } from "../utils/helper";

const ExploreCard = ({
  channelThumbnail,
  lengthText,
  channelTitle,
  publishedTimeText,
  title,
  thumbnail,
  viewCount,
}) => {

  return (
    <div className="hover:shadow-lg p-2 sm:m-2  ">
      <div className="relative ">
        <img src={thumbnail[0].url} className="rounded-lg" alt={title} />
        <small className="absolute text-white bottom-3 right-2 font-semibold p-0.5 rounded bg-black">
          {lengthText}
        </small>
      </div>
      <div className="flex pt-3">
        <img
          src={channelThumbnail[0].url}
          className="rounded-full h-10 w-10 mr-2"
          alt=""
        />
        <ul className="w-64 text-xs">
          <li className="font-bold text-sm line-clam-2">{title}</li>
          <li className="text-zinc-700 font-semibold">{channelTitle}</li>
          <li className="inline text-zinc-600 font-semibold">{`${formatter.format(
            viewCount
          )} views • 
          ${publishedTimeText}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default ExploreCard;
