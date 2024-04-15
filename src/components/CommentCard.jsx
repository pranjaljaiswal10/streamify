import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";


const CommentCard = ({replies,snippet}) => {
const {authorDisplayName,authorProfileImageUrl,likeCount,publishedAt,textOriginal}=snippet.topLevelComment.snippet;
  console.log(snippet)
  return (<li>
  <img src={authorProfileImageUrl} alt={authorDisplayName} />
  <span>{authorDisplayName}</span>
  <p>{textOriginal}</p>
  <span><AiOutlineLike/>{likeCount}</span>
  <span><AiOutlineDislike/></span>
  
  </li>);
};

export default CommentCard;
