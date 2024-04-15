import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams} from "react-router-dom";
import { closeMenu } from "../utils/menuSlice";
import WatchVideoDetailContainer from "./WatchVideoDetailContaiiner";
import SuggestionVideoContainer from "./SuggestionVideoContainer";
import CommentContainer from "./CommentContainer";


const WatchPage = () => {
    const [searchParams]=useSearchParams()
    const dispatch=useDispatch()
    useEffect(()=>{
   dispatch(closeMenu())
    },[dispatch])
  return (
    
    <div className="pl-32">
      <iframe className="h-[415px] w-[415px] "
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")+"?&autoplay=0"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
       <WatchVideoDetailContainer videoId={searchParams.get("v")} />
       <CommentContainer videoId={searchParams.get("v")}/>
       {/* <SuggestionVideoContainer /> */}

       </div> 
    
  );
};

export default WatchPage;
