import { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../constant";

const useGetComment = (videoId) => {
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    const getCommentDetail = async () => {
      const response = await fetch(YOUTUBE_COMMENTS_API(videoId));
      const data = await response.json();
      setCommentList(data.items);
    };
    getCommentDetail();
  }, [videoId]);

  return commentList;
};

export default useGetComment;
