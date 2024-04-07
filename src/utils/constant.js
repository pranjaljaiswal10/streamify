export const YOUTUBE_SEARCH_BY_KEYWORD =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=";

export const YOUTUBE_VIDEOS_API =(nextToken)=>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&pageToken=" +
  nextToken +
  "&regionCode=IN&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png";

//
export const YOUTUBE_SEARCH_VIDEO_ID_API = (search, nextToken) =>
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=" +
  search +
  "&pageToken=" +
  nextToken +
  "&type=video&fields=items%28id%28videoId%29%2C+snippet%28description%29%29%2CnextPageToken%2CpageInfo&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_DETAILS_API = (channelId) =>
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  channelId +
  "&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_COMMENTS_API = (videoId, nextToken) =>
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=" +
  videoId +
  "&pageToken=" +
  nextToken +
  "&prettyPrint=true&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_RELATED_VIDEOS_ID_API = (videoId) =>
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&relatedToVideoId=" +
  videoId +
  "&type=video&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;
