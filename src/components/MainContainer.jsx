import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import ButtonContainer from "./ButtonContainer";


const MainContainer = () => {
  const toggleBar = useSelector((store) => store.menu.isMenuOpen);
  const { keywordButton } = useSelector((store) => store.keyword);
  console.log(keywordButton);
  return (
    <>
      <div
        className={`md:mt-4 z-0 ${
          toggleBar
            ? "lg:ml-48 lg:opacity-100 lg:bg-white  opacity-50 bg-gray-200"
            : "ml-12 "
        }`}
      >
        <ButtonList />
        {keywordButton==""?<VideoContainer />:<ButtonContainer/>}
      </div>
    </>
  );
};

export default MainContainer;
