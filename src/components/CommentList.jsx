
import Comment from "./Comment";
import { BiCaretUp,BiCaretDown } from "react-icons/bi";


const CommentList = ({replies,snippet,id,setIsReplyVisible,handleToggle,toggle}) => {
 
 
  return (<>
       <li className=" bg-gray-100 my-2 px-5 py-3">
    <Comment message={snippet?.topLevelComment?.snippet}/>
    {replies &&<strong className="px-16 text-sky-600 cursor-pointer" onClick={handleToggle} >{<BiCaretUp className="inline"/> } {replies?.comments.length} replies</strong>}
    </li>
{toggle&&<ul className="pl-16">
     {
      replies?.comments.map((item)=><li className="flex bg-gray-100 my-2 px-5 py-3"  key={item.id}><Comment  message={item?.snippet}/></li>)
     }
    </ul>
}
  </>);
};

export default CommentList;
