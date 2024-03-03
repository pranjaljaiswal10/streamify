import { useSelector } from "react-redux";

const SideBar = () => {
    const toggleBar=useSelector((store)=>store.menu.toggleMenu)
  return (
    toggleBar && <div className="px-6 w-48  ">
    <div className="space-y-3 mt-4">
        <h1 className="font-bold ">Home</h1>
        <ul>
        <li className="font-medium">Short</li>
        <li className="font-medium">Videos</li>
        <li className="font-medium">Live</li>
        </ul>
    </div>
    <div className="space-y-3 mt-4">
        <h1 className="font-bold text-xl">Subscriptions</h1>
        <ul>
            <li className="font-medium">Music</li>
            <li className="font-medium">Sports</li>
            <li className="font-medium">Gaming</li>
            <li className="font-medium">Movies</li>
        </ul>
    </div>
    <div className="space-y-2 mt-4">
        <h1 className="font-bold text-xl">Watch later</h1>
        <ul>
            <li className="font-medium">Music</li>
            <li className="font-medium">Sports</li>
            <li className="font-medium">Gaming</li>
            <li className="font-medium">Movies</li>
        </ul>
    </div>
    </div>
  );
};

export default SideBar;
