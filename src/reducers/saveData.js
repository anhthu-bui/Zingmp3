// constants
import actionType from "../constants/actionType";

const initialState = {
  dataAlbumHot: [],
  dataVpop: [],
  dataNews: [],
  dataPlaylist: [],
  dataSinger: [],
  dataSongRating: [],
  dataSongRatingTop: [],
  dataVideoHot: [],
  dataZingChartAlbum: [],
  dataZingChartMV: [],
  dataZingChartSong: [],
};

const saveData = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SAVE_ALBUM_HOT: {
      return {
        ...state,
        dataAlbumHot: action.payload,
      };
    }
    case actionType.SAVE_VPOP: {
      return {
        ...state,
        dataVpop: action.payload,
      };
    }
    case actionType.SAVE_NEWS: {
      return {
        ...state,
        dataNews: action.payload,
      };
    }
    case actionType.SAVE_PLAYLIST: {
      return {
        ...state,
        dataPlaylist: action.payload,
      };
    }
    case actionType.SAVE_SINGER: {
      return {
        ...state,
        dataSinger: action.payload,
      };
    }
    case actionType.SAVE_SONG_RATING: {
      return {
        ...state,
        dataSongRating: action.payload,
      };
    }
    case actionType.SAVE_SONG_RATING_TOP: {
      return {
        ...state,
        dataSongRatingTop: action.payload,
      };
    }
    case actionType.SAVE_VIDEO_HOT: {
      return {
        ...state,
        dataVideoHot: action.payload,
      };
    }
    case actionType.SAVE_ZINGCHART_ALBUM: {
      return {
        ...state,
        dataZingChartAlbum: action.payload,
      };
    }
    case actionType.SAVE_ZINGCHART_MV: {
      return {
        ...state,
        dataZingChartMV: action.payload,
      };
    }
    case actionType.SAVE_ZINGCHART_SONG: {
      return {
        ...state,
        dataZingChartSong: action.payload,
      };
    }
    default:
      return state;
  }
};
export default saveData;
