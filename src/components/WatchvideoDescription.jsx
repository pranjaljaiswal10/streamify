

const WatchvideoDescription = ({description,tags,publishedAt,viewCount}) => {

  return (<div>
  <span>{viewCount}</span>
  <span>{tags.join(" #")}</span>
  <br/>
  <p>{description}</p>
  </div>)
};

export default WatchvideoDescription;
