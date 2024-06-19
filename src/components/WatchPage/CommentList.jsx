import Comment from "./Comment";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";

const CommentList = ({
  replies,
  id,
  snippet,
  isReplyVisible,
  setIsReplyVisible,
}) => {
  return (
    <li className=" bg-gray-100 my-2 px-5 py-3">
      <Comment message={snippet?.topLevelComment?.snippet} />
      {replies &&
        (isReplyVisible === id ? (
          <button
            className="px-16 text-sky-600 "
            onClick={() => setIsReplyVisible(null)}
          >
            <BiCaretUp className="inline" />
            {replies?.comments.length} replies
          </button>
        ) : (
          <button
            className="px-16 text-sky-600 "
            onClick={() => setIsReplyVisible(id)}
          >
            <BiCaretDown className="inline" />
            {replies?.comments.length} replies
          </button>
        ))}

      {isReplyVisible == id && replies !== undefined && (
        <ul className="pl-16">
          {replies?.comments.map((item) => (
            <li className="flex bg-gray-100 my-2 px-5 py-3" key={item.id}>
              <Comment message={item?.snippet} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default CommentList;
