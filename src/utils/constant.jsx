import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi2";
import { ImNewspaper } from "react-icons/im";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdPodcasts } from "react-icons/md";
import { RiLightbulbLine } from "react-icons/ri";

export const LIVE_CHAT_COUNT = 10;

export const LOGO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF68guDqYDnuB3q66g5D8QWPHUWveqth6NHrqkoZRVqUXjqoseolP1W4JWHxVOe11FzLc&usqp=CAU";

export const USER_ICON =
  "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

export const YOUTUBE_VIDEOS_API = (token) =>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&pageToken=" +
  token +
  "&maxResults=12&regionCode=IN&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_RELATED_VIDEOS_ID_API = (videoId) =>
  "https://yt-api.p.rapidapi.com/related?id=" + videoId;

export const RELATED_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d27d97cbafmshd7a8e843a27b5d3p113a7ajsn7b491f464de5",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

export const YOUTUBE_VIDEO_DETAILS_API = (videoId) =>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  videoId +
  "&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO_API = (videoIdList) =>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  videoIdList.toString() +
  "&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;

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

export const YOUTUBE_COMMENTS_API = (videoId) =>
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=" +
  videoId +
  "&prettyPrint=true&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;

export const categories = [
  { name: "Shpping",icon:<HiShoppingBag/> },
  { name: "Music", icon: <CgMusicNote/> },
  { name: "Films", icon: <FiFilm /> },
  { name: "Gaming", icon: <IoGameControllerSharp /> },
  { name: "News", icon: <ImNewspaper /> },
  { name: "Sport", icon: <GiDiamondTrophy /> },
  { name: "Courses", icon: <RiLightbulbLine /> },
  { name: "Fashion & Beauty", icon: <GiEclipse /> },
  { name: "Podcasts", icon: <MdPodcasts /> },
];

export const YOUTUBE_SEARCH_BY_KEYWORD = 'https://youtube-v31.p.rapidapi.com/search?q=namaste%20javascript&part=snippet%2Cid&regionCode=IN&maxResults=12&order=date';
export const KEYWORD_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd27d97cbafmshd7a8e843a27b5d3p113a7ajsn7b491f464de5',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

