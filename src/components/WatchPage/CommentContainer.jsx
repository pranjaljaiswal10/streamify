import { useState } from "react";

import CommentList from "./CommentList";
import useGetComment from "../../utils/hooks/useGetComment";

const CommentContainer = ({ videoId }) => {
  const [isReplyVisible, setIsReplyVisible] = useState("");
  const commentList=useGetComment(videoId)
  if (!commentList) return null;
  return (
    <ul className="py-6">
      {commentList.map((item) => (
        <CommentList
          {...item}
          setIsReplyVisible={setIsReplyVisible}
          isReplyVisible={isReplyVisible}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default CommentContainer;
