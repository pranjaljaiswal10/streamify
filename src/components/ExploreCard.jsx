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
    <div className="shadow-lg p-2 m-2 w-72">
      <div className="relative">
        <img src={thumbnail[0].url} className="rounded-lg" alt={title} />
        <small className="absolute text-white bottom-3 right-2 font-semibold p-0.5 rounded bg-black">{lengthText}</small>
      </div>
      <div className="flex">
        <img src={channelThumbnail[0].url} className="rounded-full h-fit w-2/12" alt="" />
        <ul className="w-10/12 text-xs">
          <li className="font-bold py-2">{title}</li>
          <li className="text-zinc-700 font-semibold">{channelTitle}</li>
          <li className="inline text-zinc-600 font-semibold">{`${formatter.format(
            viewCount
          )} views .`}</li>

          {publishedTimeText &&<li className="inline text-zinc-600 font-semibold">{publishedTimeText}</li>}
        </ul>
      </div>
    </div>
  );
};

export default ExploreCard;
