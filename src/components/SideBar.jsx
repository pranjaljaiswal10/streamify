import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
  const toggleBar = useSelector((store) => store.menu.isMenuOpen);
  const categories = [
    { name: "Shopping", icon: <HiShoppingBag className="inline" /> },
    { name: "Music", icon: <CgMusicNote /> },
    { name: "Films", icon: <FiFilm /> },
    { name: "Gaming", icon: <IoGameControllerSharp /> },
    { name: "News", icon: <ImNewspaper /> },
    { name: "Sport", icon: <GiDiamondTrophy /> },
    { name: "Courses", icon: <RiLightbulbLine /> },
    { name: "Fashion & Beauty", icon: <GiEclipse /> },
    { name: "Podcasts", icon: <MdPodcasts /> },
  ];

  return (
    <div className="ml-6 mr-10 w-fit">
      <ul className="space-y-3 mt-4 text-sm">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "bg-gray-300 hover:bg-gray-400 " : "bg-transparent"
              }  pl-2 py-2 pr-8 font-medium flex hover:bg-gray-300 duration-200 rounded-lg`
            }
          >
            {toggleBar && <><span className="text-xl">
             <GoHomeFill />
            </span>{" "}
             <span className="pl-4">Home</span>
             </>
             }
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/explore/Short"
            className={({ isActive }) =>
              `${
                isActive ? "bg-gray-300 hover:bg-gray-400 " : "bg-transparent"
              }  pl-2 py-2 pr-8 font-medium flex hover:bg-gray-300 duration-200 rounded-lg`
            }
          >
          <span className="text-xl">
            <SiYoutubeshorts />
          </span>
          {toggleBar && <span className="pl-4">Short</span>}
          </NavLink>
        </li>
      </ul>
      <div className="pt-2 mt-4">
        {toggleBar && <span className="font-bold text-xl ml-3">Explore</span>}
        <ul className="text-sm space-y-3">
          {toggleBar && categories.map((item) => (
            <li key={item.name}>
              <NavLink
                to={`/explore/${item.name}`}
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-gray-400" : "bg-transparent"
                  } pl-2 py-2 pr-8 font-medium hover:bg-gray-300 rounded-lg flex items-center`
                }
              >
                <span className="text-xl"> {item.icon}</span>
                {toggleBar && <span className="pl-4">{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
