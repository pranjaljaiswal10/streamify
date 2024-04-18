import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_DETAILS_API } from "../utils/constant";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { TfiDownload } from "react-icons/tfi";
import { PiShareFat } from "react-icons/pi";

const WatchVideoButtonList = ({ channelId, likeCount }) => {
  const [channelDetail, setChannelDetail] = useState(null);
  useEffect(() => {
    const getChannelDetail = async () => {
      const response = await fetch(YOUTUBE_CHANNEL_DETAILS_API(channelId));
      const data = await response.json();
      setChannelDetail(data.items[0]);
    };
    getChannelDetail();
  }, [channelId]);

  if (!channelDetail) return;
  const { snippet, statistics } = channelDetail;
  const {
    thumbnails: { medium },
  } = snippet;

  return (
    <>
    <div className="flex justify-between">
      <img src={medium.url} className="h-10" alt="" />
      <div className="flex-1">
      <strong>{snippet.title}</strong>
       <small className="block">{statistics.subscriberCount} subscribers</small>
       </div>
      <button className=" bg-black px-3 py-1 rounded-full text-white">Subscribe</button>
      </div>
      <ul className="flex font-bold my-4">
        <li className="p-2 bg-slate-100 hover:bg-slate-300 cursor-pointer ml-3 rounded-full">
          <AiOutlineLike  className="inline   "/>
          {likeCount}
        </li>
        <li className="p-2 bg-slate-100 hover:bg-slate-300 cursor-pointer ml-3 rounded-full">
          <AiOutlineDislike  className="inline  " />
        </li>
        <li className="p-2 bg-slate-100 hover:bg-slate-300 cursor-pointer ml-3 rounded-full">
          <PiShareFat  className="inline  "/>
          Share
        </li>
        <li className="p-2 bg-slate-100 hover:bg-slate-300 cursor-pointer ml-3 rounded-full">
          <TfiDownload  className="inline  "/>
          Download
        </li>
      </ul>
    </>
  );
};

export default WatchVideoButtonList;
