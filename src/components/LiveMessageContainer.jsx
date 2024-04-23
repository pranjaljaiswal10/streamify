import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LiveChat from "./LiveChat";
import { addMessage } from "../utils/chatSlice";
import {faker} from "@faker-js/faker"

const LiveMessageContainer = () => {
   const dispatch=useDispatch()
   useEffect(()=>{
  let timerId=setInterval(()=>{
    dispatch(addMessage({
      name:faker.person.fullName(),
      message:faker.lorem.sentence(3)
    }))
  },1000)
  
   return ()=>{
   clearInterval(timerId)
   } 
   },[dispatch])
  return (<>
   <LiveChat/>
  </>)
};

export default LiveMessageContainer;
