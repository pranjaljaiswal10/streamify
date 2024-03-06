

const VideoCard = ({snippet,statistics}) => {
    const {thumbnails:{medium},channelTitle,title}=snippet
   const {viewCount}=statistics
    
  return  (
    <div className="shadow-lg p-2 m-2 w-72 ">
        <img src={medium.url} className="rounded-lg" alt="thumbnail" />
        <h1 className="font-bold py-2"> {title}</h1>
        <h2>{channelTitle}</h2>
        <h3>{(viewCount/1000000).toFixed(1)}M views</h3>
    </div>
  );
};

export default VideoCard;
