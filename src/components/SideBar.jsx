import { useSelector } from "react-redux";

const SideBar = () => {
    const toggleBar=useSelector((store)=>store.menu.toggleMenu)
    const keyword=["Shpping","Music","Movies","Live","Gaming","Live","Gaming","News","Sport","Courses","Fashion & Beauty","Podcasts"]
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
                keyword.map((item)=><li key={item} className="font-medium">item</li>)
            }
        </ul>
    </div>
    </div>
  );
};

export default SideBar;
