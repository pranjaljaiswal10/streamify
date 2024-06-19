import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LiveChat from "./LiveChat";
import { addMessage } from "../../utils/chatSlice";
import { randAvatar, randFullName, randTextRange } from "@ngneat/falso";



const LiveMessageContainer = () => {
   const dispatch=useDispatch()
   useEffect(()=>{
  let timerId=setInterval(()=>{
    dispatch(addMessage({
      name:randFullName(),
      message:randTextRange({min:10,max:100}),
      image:randAvatar()
    }))
  },1000)
  
   return ()=>{
   clearInterval(timerId)
   } 
   },[dispatch])
  return (<div className="hidden md:block">
   <LiveChat/>
  </div>)
};

export default LiveMessageContainer;
