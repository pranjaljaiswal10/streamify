

const VideoCard = ({snippet,statistics,thumbnails}) => {
    const {thumbnails:{medium},channelTitle,title}=snippet
   const {viewCount}=statistics
    const logo=thumbnails.default
  return  (
    <div className="shadow-lg p-2 m-2 w-72 ">
        <img src={medium.url} className="rounded-lg" alt="thumbnail" />
        <div className="flex">
        <img src={logo.url} alt="" className="rounded-full h-fit w-2/12" />
        <div className="w-10/12 text-xs">
        <h1 className="font-bold  py-2"> {title}</h1>
        <h2>{channelTitle}</h2>
        <h3>{(viewCount/1000000).toFixed(1)}M views</h3>
        </div>
        </div>
    </div>
  );
};

export default VideoCard;
