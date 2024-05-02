import { FaRegCompass } from "react-icons/fa";


const ButtonList = () => {
    const button=["All","Gaming","Song","Live","Soccer","Cricket","Valentines","Cricket","Cookies"]
  return (
    <>
    <button><FaRegCompass/></button>
    {
        button.map((item,index)=>(
            <button key={index} className="bg-gray-400 rounded-md py-1 px-3 mx-2">{item}</button>
        ))
    }
    </>
  );
};

export default ButtonList;
