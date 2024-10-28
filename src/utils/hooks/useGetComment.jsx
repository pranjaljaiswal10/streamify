import { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../constant";

const useGetComment = (videoId) => {
  const [commentList, setCommentList] = useState([]);
  const [page, setPage] = useState(1);
  const [token, setToken] = useState("");
  const getCommentDetail = async () => {
    const response = await fetch(YOUTUBE_COMMENTS_API(videoId, token));
    const data = await response.json();
    console.log(data);
    setCommentList([...commentList,...data.items]);
    setToken(data.nextPageToken);
  };
  useEffect(() => {
    getCommentDetail();
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return commentList;
};

export default useGetComment;
