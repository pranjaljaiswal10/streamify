import { FaRegCompass } from "react-icons/fa";
import { Link } from "react-router-dom";


const ButtonList = () => {
    const button=["Gaming","Song","Live","Soccer","Valentines","Cricket","Cookies"]
  return (
    <>
    <button><FaRegCompass/></button>
    {
        button.map((item)=>(
            <button key={item} className="bg-gray-400 rounded-md py-1 px-3 mx-2">
            <Link to={`/explore/${item}`}>
              {item}
              </Link>
              </button>
        ))
    }
    </>
  );
};

export default ButtonList;
