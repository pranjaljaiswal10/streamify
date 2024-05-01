import { useSelector } from "react-redux";

const SideBar = () => {
    const toggleBar=useSelector((store)=>store.menu.isMenuOpen)
  return (
    toggleBar && (<div className="px-6 w-48  ">
    <div className="space-y-3 mt-4">
        <ul>
        <li className="font-bold ">Home</li>
        <li className="font-medium">Short</li>
        <li className="font-medium">Videos</li>
        <li className="font-medium">Live</li>
        </ul>
    </div>
    </div>)
  );
};

export default SideBar;
