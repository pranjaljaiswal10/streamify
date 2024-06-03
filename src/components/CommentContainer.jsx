import { useState } from "react";
import useGetComment from "../utils/hooks/useGetComment";
import CommentList from "./CommentList";

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
