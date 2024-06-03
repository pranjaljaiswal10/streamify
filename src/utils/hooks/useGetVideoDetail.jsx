import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_DETAILS_API } from "../constant";

const useGetVideoDetail = (videoId) => {
  const [videoDetail, setVideoDetail] = useState(null);
  useEffect(() => {
    const getVideoDetail = async () => {
      try {
        const response = await fetch(YOUTUBE_VIDEO_DETAILS_API(videoId));
        const data = await response.json();
        setVideoDetail(data.items[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getVideoDetail();
  }, [videoId]);
  return videoDetail;
};

export default useGetVideoDetail;
