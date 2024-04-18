import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams} from "react-router-dom";
import { closeMenu } from "../utils/menuSlice";
import WatchVideoDetailContainer from "./WatchVideoDetailContaiiner";
import CommentContainer from "./CommentContainer";


const WatchPage = () => {
    const [searchParams]=useSearchParams()
    const dispatch=useDispatch()
    useEffect(()=>{
   dispatch(closeMenu())
    },[dispatch])
  return (
    <div className="px-44 flex pt-6">
    <div className="w-8/12">
      <iframe className="w-full rounded"
            width="1200"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")+"?&autoplay=0"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
       <WatchVideoDetailContainer videoId={searchParams.get("v")} />
       <CommentContainer videoId={searchParams.get("v")}/>
       </div> 
       <div className="w-/12">
        live-comment
       </div>
    </div>
  );
};

export default WatchPage;
