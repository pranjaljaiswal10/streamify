import { useSelector } from "react-redux";

const WatchPageShimmer = () => {
  const toggleMenu = useSelector((store) => store.menu.isMenuOpen);
  return (
    <div
      className={`flex mt-4 w-screen animate-pulse ${
        toggleMenu ? "lg:ml-56 ml-28" : "lg:ml-20 ml-14"
      }`}
    >
      <div className="lg:w-7/12">
        <div className=" w-full h-[400px] rounded bg-gray-400"></div>
        <div className="h-4 w-[600px] rounded bg-gray-400 mt-3"></div>
        <div className="mt-2 flex">
          <div className="w-10/12">
            <div className="flex">
              <div className="h-10 w-10 rounded-full bg-gray-400"></div>
              <div>
                <div className="h-4 w-52 rounded bg-gray-400 mb-1.5"></div>
                <div className="h-4 w-36 rounded bg-gray-400 "></div>
              </div>
            </div>
          </div>
          <div className="w-2/12 h-8 rounded-full bg-gray-400"></div>
        </div>
        <div className="h-32  w-full mt-3 rounded bg-gray-400"></div>
      </div>
      <div className="lg:w-5/12 lg:block hidden">
        <div className="h-[500px]  bg-gray-400 rounded mr-16 ml-6"></div>
      </div>
    </div>
  );
};

export default WatchPageShimmer;
