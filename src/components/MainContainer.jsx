import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList"

const MainContainer = () => {
  const toggleBar=useSelector((store)=>store.menu.isMenuOpen)

  return (
  <>
   <div className={`mt-4 z-0 ${toggleBar?"sm:ml-56":"sm:ml-6"}`}>
      <ButtonList />
      <VideoContainer />
     </div>
    </>
  );
};

export default MainContainer;
