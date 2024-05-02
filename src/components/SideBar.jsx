import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi2";
import { ImNewspaper } from "react-icons/im";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdPodcasts } from "react-icons/md";
import { RiLightbulbLine } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";

const SideBar = () => {
    const toggleBar=useSelector((store)=>store.menu.isMenuOpen)
    const categories = [
        { name: "Shopping",icon:<HiShoppingBag size={20} className="inline"/> },
        { name: "Music", icon: <CgMusicNote size={20} className="inline"/> },
        { name: "Films", icon: <FiFilm size={20}  className="inline"/> },
        { name: "Gaming", icon: <IoGameControllerSharp size={20} className="inline"/> },
        { name: "News", icon: <ImNewspaper size={20}  className="inline"/> },
        { name: "Sport", icon: <GiDiamondTrophy size={20} className="inline"/> },
        { name: "Courses", icon: <RiLightbulbLine size={20} className="inline"/> },
        { name: "Fashion & Beauty", icon: <GiEclipse size={20} className="inline"/> },
        { name: "Podcasts", icon: <MdPodcasts size={20} className="inline"/> },
      ];

   return (
     <div className=" mx-8">
        <ul className="space-y-1 mt-4 text-sm">
        <li className="font-medium px-3 py-1 hover:bg-gray-300 rounded"><GoHomeFill size={20} className="inline"/> {toggleBar &&<span className="pl-4">Home</span>}</li>
        <li className="font-medium px-3 py-1 hover:bg-slate-300 rounded"> <SiYoutubeshorts size={20} className="inline"/>{toggleBar &&<span className="pl-4">Short</span>}</li>
        </ul>
    <div className="space-y-3 mt-4">
       {toggleBar&& <span className="font-bold text-xl">Explore</span>}
        <ul className="text-sm">
            {
                categories.map((item)=>
                <Link to={`/explore/${item.name}`} key={item.name}>
                <li  className="font-medium px-3 py-1 my-4 hover:bg-gray-300 rounded">{item.icon} {toggleBar &&<span className="pl-2">{item.name}</span>}</li>
                </Link>
                )
            }
        </ul>
    </div>
    </div>
  );
};

export default SideBar;
