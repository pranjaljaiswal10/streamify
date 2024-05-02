export const LOGO =
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF68guDqYDnuB3q66g5D8QWPHUWveqth6NHrqkoZRVqUXjqoseolP1W4JWHxVOe11FzLc&usqp=CAU"

export const USER_ICON="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"

export const YOUTUBE_VIDEOS_API=
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&pageToken="  +
"&regionCode=IN&key=" +
import.meta.env.VITE_GOOGLE_API_KEY;

  export const YOUTUBE_VIDEO_DETAILS_API = (videoId) =>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  videoId +
  "&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY; 

export  const  SEARCH_SUGGESTION_API= (query)=>'https://youtube-data8.p.rapidapi.com/auto-complete/?q='+query+'&hl=en&gl=IN';
export  const SUGGESTION_OPTION= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd27d97cbafmshd7a8e843a27b5d3p113a7ajsn7b491f464de5',
      'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
    }
  };

  export const YOUTUBE_RELATED_VIDEOS_ID_API = (videoId) =>
  "https://yt-api.p.rapidapi.com/related?id=" + videoId;

export const RELATED_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d27d97cbafmshd7a8e843a27b5d3p113a7ajsn7b491f464de5",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};




export const YOUTUBE_SEARCH_VIDEO_API= (query) => "https://yt-api.p.rapidapi.com/search?query="+query+"&geo=IN&type=video&sort_by=views"


export const SEARCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd27d97cbafmshd7a8e843a27b5d3p113a7ajsn7b491f464de5',
		'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
	}
};


export const YOUTUBE_CHANNEL_DETAILS_API = (channelId) =>
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  channelId +
  "&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_COMMENTS_API = (videoId) =>
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=" +
  videoId +
  "&prettyPrint=true&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;


