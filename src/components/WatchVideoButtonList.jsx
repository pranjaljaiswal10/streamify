import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_DETAILS_API } from "../utils/constant";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { TfiDownload } from "react-icons/tfi";
import { PiShareFat } from "react-icons/pi";

const WatchVideoButtonList = ({ channelId,likeCount }) => {
  const [channelDetail, setChannelDetail] = useState();
  useEffect(() => {
    const getChannelDetail = async () => {
      const response = await fetch(YOUTUBE_CHANNEL_DETAILS_API(channelId));
      const data = await response.json();
      setChannelDetail(data.items[0]);
    };
    getChannelDetail();
  }, [channelId]);
  
  return (
    <>
      <button>Subscribe</button>
      <button>
        <AiOutlineLike />{likeCount}
      </button>
      <button>
        <AiOutlineDislike />
      </button>
      <button>
        <PiShareFat />Share
      </button>
      <button>
        <TfiDownload />
        Download
      </button>
    </>
  );
};

export default WatchVideoButtonList;
