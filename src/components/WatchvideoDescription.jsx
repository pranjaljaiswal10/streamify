

const WatchvideoDescription = ({description,publishedAt,viewCount}) => {

  return (<div className="bg-slate-100 hover:bg-slate-300 p-4 rounded">
  <span>{viewCount}</span>
  <span className="px-4">{publishedAt}</span>
  <br/>
  <p className="text-sm whitespace-pre-line">{description}</p>
  </div>)
};

export default WatchvideoDescription;
