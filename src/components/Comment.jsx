import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { formatter, relativeTime } from "../utils/helper";
import { USER_ICON } from "../utils/constant";

const Comment = ({ message }) => {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    textOriginal,
    publishedAt,
  } = message;

  return (
    <div className="flex">
      <img
        src={authorProfileImageUrl ? authorProfileImageUrl : USER_ICON}
        alt={authorDisplayName}
        className="rounded-full w-12 h-12 pt-1"
      />
      <div className="px-3">
        <strong>{authorDisplayName}</strong>
        <span className="text-xs text-gray-600 px-3">
          {relativeTime(publishedAt)}
        </span>
        <p className="text-sm py-1 break-all">{textOriginal}</p>
        <span>
          <AiOutlineLike className="inline cursor-pointer" />
          <span className="text-xs text-gray-600">
            {formatter.format(likeCount)}
          </span>
        </span>
        <span className="px-4">
          <AiOutlineDislike className="inline cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default Comment;
