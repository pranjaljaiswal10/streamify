import { Link } from "react-router-dom";

const ButtonList = () => {
  const button = [

    "Live chat",
    "Gaming",
    "Song",
    "Live",
    "Soccer",
    "Valentines",
    "Cricket",
    "Cookies",
  ];

  return (
    <ul className="flex ml-4 overflow-x-scroll">
      {button.map((item) => (
        <Link to={`/explore/${item}`} key={item}>
          <li className="bg-gray-400 cursor-pointer rounded-lg sm:px-4 sm:py-2 py-1 px-3 mx-2 mb-2">
            {item}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ButtonList;
