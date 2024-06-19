import WatchVideoButtonList from "./WatchVideoButtonList";
import WatchvideoDescription from "./WatchvideoDescription";
import { formatter } from "../../utils/helper";
import useGetVideoDetail from "../../utils/hooks/useGetVideoDetail";

const WatchVideoDetailContainer = ({ videoId }) => {
  const videoDetail=useGetVideoDetail(videoId)
  if (!videoDetail) return;
  const { snippet, statistics } = videoDetail;

  return (
    <>
      <h1 className="font-bold text-lg sm:text-base py-3">{snippet.title}</h1>
      <WatchVideoButtonList channelId={snippet.channelId} {...statistics} />
      <WatchvideoDescription {...snippet} {...statistics} />
      <span className="my-6 font-bold text-xl">
        {formatter.format(statistics.commentCount)} Comments
      </span>
    </>
  );
};

export default WatchVideoDetailContainer;
