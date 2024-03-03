import SideBar from "./SideBar"
import VideoContainer from "./VideoContainer";
import ButtonList from "./buttonList";

const Body = () => {
  return (
    <div className="flex">
    <SideBar/>
    <div>
    <ButtonList/>
    <VideoContainer/>
    </div>
    </div>
  );
};

export default Body;
