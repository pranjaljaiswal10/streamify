import { useSelector } from "react-redux";
import { categories } from "../utils/constant";
import { Link } from "react-router-dom";


const SideBar = () => {
    const toggleBar=useSelector((store)=>store.menu.isMenuOpen)
    
    
    return (
    toggleBar && <div className="px-6 w-48  ">
    <div className="space-y-3 mt-4">
        <ul>
        <li className="font-bold ">Home</li>
        <li className="font-medium">Short</li>
        <li className="font-medium">Videos</li>
        <li className="font-medium">Live</li>
        </ul>
    </div>
    <div className="space-y-3 mt-4">
        <h1 className="font-bold text-xl">Explore</h1>
        <ul>
            {
                categories.map((item)=>
                <Link to={`/explore/${item}`} key={item}>
                <li  className="font-medium">{item.icon}{item.name}</li>
                </Link>
                )
            }
        </ul>
    </div>
    </div>
  );
};

export default SideBar;
