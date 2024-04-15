import { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constant";
import CommentCard from "./CommentCard";


const CommentContainer = ({videoId}) => {
  const [commentList,setCommetList]=useState([])
  const [token,setToken]=useState("")
  useEffect(()=>{
    const getCommentDetail=async()=>{
      const response=await fetch(YOUTUBE_COMMENTS_API(videoId))
      const data=await response.json()
      setCommetList(data.items)
    }
    getCommentDetail()
  },[videoId])

if(commentList.length==0) return null
//  console.log(commentList)
  return (
    <div>
      <ul>
    {
      commentList.map((item)=><CommentCard  {...item} key={item.id}/>)
    }
    </ul>
   </div>
  )
};

export default CommentContainer;
