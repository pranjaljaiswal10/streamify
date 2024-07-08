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
    toggleBar && (
      <div
        className={`lg:ml-6  lg:mr-10 fixed z-10 overflow-auto md:overflow-visible bg-white  lg:w-[10rem] h-full`}
      >
        <ul className="space-y-3 mt-4 text-sm lg:pr-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-gray-300 hover:bg-gray-400 font-bold "
                    : "bg-transparent"
                }   py-2  pl-2 lg:mr-0  mr-12 lg:pr-8  font-medium flex items-center hover:bg-gray-300 duration-200 rounded-lg`
              }
            >
              <span className="lg:text-xl md:text-lg text-base">
                <GoHomeFill />
              </span>
              <span className="pl-4">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore/Short"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-gray-300 hover:bg-gray-400 font-bold"
                    : "bg-transparent"
                }  pl-2 py-2 pr-8 font-medium flex hover:bg-gray-300 duration-200 rounded-lg`
              }
            >
              <span className="text-xl">
                <SiYoutubeshorts />
              </span>
              <span className="pl-4">Short</span>
            </NavLink>
          </li>
        </ul>
        <div className="pt-2 mt-4">
          <span className="font-bold text-xl ml-3">Explore</span>
          <ul className="text-sm space-y-3 lg:pr-6">
            {categories.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={`/explore/${item.name}`}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-gray-300 hover:bg-gray-400 font-bold"
                        : "bg-transparent"
                    } pl-2 py-2 pr-8 font-medium hover:bg-gray-300 rounded-lg flex items-center`
                  }
                >
                  <span className="text-xl"> {item.icon}</span>
                  <span className="pl-4">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default SideBar;
