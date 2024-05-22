import {  useNavigate } from "react-router-dom";

const ButtonList = () => {
  const button = [
    "Dan Abramov",
    "React js",
    "Redux",
    "Bundler",
    "Debouncing",
    "Tailwind",
    "Web Developer",
    "Hooks",
    "Component",
    "Akshay Saini OP",
    "npm",
    "Infinite Scroll",
    "Cache",  
    "Live chat",
    "Gaming",
    "Song",
    "Live",
    "Soccer",
    "Valentines",
    "Cricket",
    "Cookies",
  ];
  const navigate=useNavigate()
const handleClick=(e)=>{
  const {innerText}=e.target
  navigate(`/explore/${innerText}`)

}
  return (
    <div className="sticky top-[55px] bg-white mr-4 flex overflow-x-scroll max-w-[calc(100vw-60vw)] text-sm z-10 sm:w-[calc(100vw-20vw)]" onClick={handleClick}>
      {button.map((item) => (
 
          <button className="py-1 px-2 rounded-lg bg-gray-100 mx-2 mb-2 flex-shrink-0 hover:bg-gray-200  sm:px-4" key={item}>
            {item}
          </button>
       
      ))}
    </div>
  );
};

export default ButtonList;
