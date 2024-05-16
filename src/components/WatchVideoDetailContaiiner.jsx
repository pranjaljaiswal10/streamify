import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/constant";
import WatchVideoButtonList from "./WatchVideoButtonList";
import WatchvideoDescription from "./WatchvideoDescription";
import { formatter } from "../utils/helper";

const WatchVideoDetailContainer = ({ videoId }) => {
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

  if (!videoDetail) return;

  const { snippet, statistics } = videoDetail;

  return (
    <>
      <h1 className="font-bold text-lg py-3">{snippet.title}</h1>
      <WatchVideoButtonList channelId={snippet.channelId} {...statistics} />
      <WatchvideoDescription {...snippet} {...statistics} />
      <span className="my-6 font-bold text-xl">
        {formatter.format(statistics.commentCount)} Comments
      </span>
    </>
  );
};

export default WatchVideoDetailContainer;
