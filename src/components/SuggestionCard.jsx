import { formatter } from "../utils/helper";

const SuggestionCard = ({
  channelTitle,
  publishedTimeText,
  thumbnail,
  lengthText,
  title,
  viewCount,
}) => {
  return (
    <div className="flex flex-col md:flex-row my-4">
      <div className="relative md:w-3/12">
        <img src={thumbnail[1].url} alt={title} className="rounded-lg w-full h-full" />
        <small className="absolute bottom-1 right-1 bg-black text-white p-1 rounded">
          {lengthText}
        </small>
      </div>
      <ul className="pl-3 md:w-9/12">
        <li className="font-bold text-sm line-clamp-2">{title}</li>
        <li className="text-zinc-600 font-semibold text-sm ">{channelTitle}</li>
        <li className="inline text-zinc-600 text-sm">
          {formatter.format(viewCount)} views • {publishedTimeText}
        </li>
      </ul>
    </div>
  );
};

export default SuggestionCard;
