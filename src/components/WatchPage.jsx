import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/menuSlice";
import WatchVideoDetailContainer from "./WatchVideoDetailContaiiner";
import CommentContainer from "./CommentContainer";
import SuggestionVideoContainer from "./SuggestionVideoContainer";
import LiveMessageContainer from "./LiveMessageContainer";
import WatchPageShimmer from "./WatchPageShimmer";

const WatchPage = () => {
  const toggleBar = useSelector((store) => store.menu.isMenuOpen);
  const { data } = useSelector((store) => store.data);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  console.log(isOnline);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return data.length ? (
    <WatchPageShimmer />
  ) : isOnline ? (
    <div
      className={`lg: pt-6 md:flex   ${
        toggleBar
          ? "ml-56 lg:opacity-100 lg:bg-white  opacity-50 bg-gray-200"
          : "lg:ml-20 mx-4"
      }`}
    >
      <div className="lg:w-8/12 lg:pr-32 ">
        <div className="max-w-[820px] ">
          <iframe
            className="w-full rounded"
            height="400"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?&autoplay=0"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <WatchVideoDetailContainer videoId={searchParams.get("v")} />
        <CommentContainer videoId={searchParams.get("v")} />
      </div>
      <div className="lg:w-4/12 lg:mr-12">
        <LiveMessageContainer />
        <SuggestionVideoContainer />
      </div>
    </div>
  ) : (
    <div className=" w-screen h-screen flex justify-center items-center flex-col">
      <h1>Connect to the Internet</h1>
      <p>You are offline.Check your Connection and refresh page</p>
    </div>
  );
};

export default WatchPage;
