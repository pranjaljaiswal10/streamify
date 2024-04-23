
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_ICON } from "../utils/constant";
import { addMessage } from "../utils/chatSlice";



const LiveChat = () => {
    const [inputMessage,setInputMessage]=useState("")
    const [toggleChat,setToggleChat]=useState(true)
    const {message}=useSelector((store)=>store.chat)
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
      e.preventDefault()
     dispatch(addMessage({
      name:"Pranjal Jaiswal",
      message:e.target.value
     }))
    }
    const handleToggeleChat=()=>{
   setToggleChat(!toggleChat)
    }
  return (
    <div className="bg-gray-400  flex flex-col items-center overflow-y-scroll h-1/2">
      <strong className="text-center mx-auto">Live Chat</strong>
   {toggleChat &&( <div className="5/6">
      {
        message.map((item,index)=>(
          <div key={index} className="flex shadow-lg bg-slate-50 rounded mb-4 ">
            <img src={USER_ICON} alt="" className="w-2/12" />   
            <div className="w-10/12">
             <strong>{item.name}</strong>
             <p>{item.message}</p> 
              </div>        
           </div>
        ))
      }
    </div>)
}
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputMessage} placeholder="Say something..." className="rounded-lg" onChange={(e)=>setInputMessage(e.target.value)} />
      <button type="submit">send</button>
    </form>
    <button onClick={handleToggeleChat}>Hide Chat</button>
    </div>
 );
};

export default LiveChat;
