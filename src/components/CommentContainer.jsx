import { useCallback, useEffect, useState } from "react";
import {  YOUTUBE_COMMENTS_API } from "../utils/constant";
import  CommentList from "./CommentList";


const CommentContainer = ({videoId}) => {
  const [commentList,setCommetList]=useState([])
  const [nextToken,setNextToken]=useState("")
  const [isReplyVisible,setIsReplyVisible]=useState("")
  useEffect(()=>{
    const getCommentDetail=async()=>{
      const response=await fetch(YOUTUBE_COMMENTS_API(videoId))
      const data=await response.json()
      console.log(data)
      setCommetList(data.items)
      setNextToken(data.nextPageToken)
    }
    getCommentDetail()
  },[videoId])

const getMoreComment=useCallback(async()=>{
    const response=await fetch(YOUTUBE_COMMENTS_API(videoId,nextToken))
    const data=await response.json();
    console.log(data)
    setCommetList(prevComment=>[...prevComment,...data.items])
    setNextToken(data.nextPageToken)
},[nextToken,videoId])

  useEffect(()=>{
    function handleScroll(){
      const isBottom=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight;
      if(isBottom)
     {
      getMoreComment()
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
