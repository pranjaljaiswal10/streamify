import { useState } from "react";
import { formatter, relativeTime } from "../../utils/helper";

const WatchvideoDescription = ({ description, publishedAt, viewCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handlClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-slate-100 hover:bg-slate-300 p-4 mb-8 rounded text-sm md:text-base">
      <span className="font-bold">{formatter.format(viewCount)}</span>
      <span className="px-4 font-bold">{relativeTime(publishedAt)}</span>
      <br />
      {isOpen ? (
        <p className="text-sm whitespace-pre-line">
          {description}
          <span onClick={handlClick} className="font-bold cursor-pointer pl-2">
            see less{" "}
          </span>
        </p>
      ) : (
        <p>
          {description.slice(0, 100)}
          <span onClick={handlClick} className="font-bold cursor-pointer pl-2">
            see more
          </span>
        </p>
      )}
    </div>
  );
};

export default WatchvideoDescription;
