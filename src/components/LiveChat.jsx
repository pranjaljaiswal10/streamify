import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_ICON } from "../utils/constant";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [toggleChat, setToggleChat] = useState(true);
  const { message } = useSelector((store) => store.chat);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Pranjal Jaiswal",
        message: e.target.value,
      })
    );
  };
  const handleToggeleChat = () => {
    setToggleChat(!toggleChat);
  };
  return (
    <div className="bg-gray-100  flex flex-col items-center rounded-md mb-16">
      <strong className="text-center mx-auto py-2 border-b-2 border-gray-200 w-full">
        Live Chat
      </strong>
      {toggleChat && (
        <div className="w-5/6 overflow-y-scroll h-[350px]">
          {message.map((item, index) => (
            <div
              key={index}
              className="flex items-center shadow-lg bg-slate-50 rounded mb-4 "
            >
              <img src={USER_ICON} alt="" className="w-8 h-8 mx-2" />
              <div className="">
                <strong className="text-sm">{item.name}</strong>
                <p className="text-sm">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}{" "}
      <form onSubmit={handleSubmit} className="w-full pl-10 py-4">
        <div className="flex items-center ml-0.5">
          <img src={USER_ICON} alt="" className="h-8 w-8" />
          <span className="font-bold text-sm pl-2">Pranjal Jaiswal </span>
        </div>
        <input
          type="text"
          value={inputMessage}
          placeholder="Say something..."
          className="rounded-full px-3 py-2 my-4  border border-gray-200"
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button
          type="submit"
          className="py-1 px-3 border border-gray-300 ml-2 rounded-2xl hover:bg-gray-400"
        >
          send
        </button>
      </form>
      <button
        onClick={handleToggeleChat}
        className="font-bold texd-sm border-t-2 border-gray-200 w-full py-2"
      >
       {toggleChat?"Hide Chat":"Show Chat"}
      </button>
    </div>
  );
};

export default LiveChat;
