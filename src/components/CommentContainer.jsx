import { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constant";
import  CommentList from "./CommentList";



const CommentContainer = ({videoId}) => {
  const [commentList,setCommetList]=useState([])
  const [isReplyVisible,setIsReplyVisible]=useState("")
  const [nextToken,setNextToken]=useState("")
  const [page,setPage]=useState(1)
  const getCommentDetail=async()=>{
    const response=await fetch(YOUTUBE_COMMENTS_API(videoId))
    const data=await response.json()
    setNextToken(data.nextPageToken)
    console.log(data)
    setCommetList(...commentList,...data.items)
  }
  useEffect(()=>{
    getCommentDetail()
  },[videoId,page])

useEffect(()=>{
 function handleScroll(){
  const isBottom=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight;
  if(isBottom)
  {
    setPage(prevPage=>prevPage+1)
  }
 }

 window.addEventListener("scroll",handleScroll)
 return ()=>{
    window.addEventListener("scroll",handleScroll)
  }
},[])


if(commentList.length==0) return null

return (
  <ul className="py-6">
    {
      commentList.map((item)=><CommentList {...item}    setIsReplyVisible={setIsReplyVisible} isReplyVisible={isReplyVisible} key={item.id}/>)
    }
      </ul>
  )
};

export default CommentContainer;
