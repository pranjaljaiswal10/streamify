import { useEffect, useState } from "react";
import { RELATED_OPTIONS, YOUTUBE_RELATED_VIDEOS_ID_API } from "../constant";
import { useDispatch } from "react-redux";
import { addData } from "../searchSlice";

const useGetSuggestionVideo = (searchParams) => {
  const dispatch = useDispatch();
  const [relatedVideoIdList, setRelatedVideoIdList] = useState(null);
  useEffect(() => {
    const getSuggestionVideo = async () => {
      const response = await fetch(
        YOUTUBE_RELATED_VIDEOS_ID_API(searchParams.get("v")),
        RELATED_OPTIONS
      );
      const json = await response.json();
      setRelatedVideoIdList(json.data);
      dispatch(addData(json.data));
    };
    getSuggestionVideo(searchParams.get("v"));
  }, [searchParams, dispatch]);

  return relatedVideoIdList;
};

export default useGetSuggestionVideo;
