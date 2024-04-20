import { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constant";
import  CommentList from "./CommentList";



const CommentContainer = ({videoId}) => {
  const [commentList,setCommetList]=useState([])
  const [isReplyVisible,setIsReplyVisible]=useState("")
  const [toggle,setToggle]=useState(false)
  const handleToggle=()=>{
    if(isReplyVisible)
    setToggle(!toggle)
  }
  useEffect(()=>{
    const getCommentDetail=async()=>{
      const response=await fetch(YOUTUBE_COMMENTS_API(videoId))
      const data=await response.json()
      setCommetList(data.items)
    }
    getCommentDetail()
  },[videoId])

if(commentList.length==0) return null
console.log(commentList)
return (
  <ul className="py-6">
    {
      commentList.map((item)=><CommentList {...item} handleToggle={handleToggle}   setIsReplyVisible={setIsReplyVisible} toggle={toggle}  key={item.id}/>)
    }
      </ul>
  )
};

export default CommentContainer;
