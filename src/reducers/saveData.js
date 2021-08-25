// mocks
import AlbumHot from "../mocks/AlbumHot";
import VPop from "../mocks/VPop";
import news from "../mocks/News";
import playList from "../mocks/PlayList";
import singer from "../mocks/Singer";
import songRating from "../mocks/SongRating";
import songRatingTop from "../mocks/SongRatingTop";
import videoHot from "../mocks/VideoHot";
import zingChartAlbum from "../mocks/ZingChart_Album";
import zingChartMV from "../mocks/ZingChart_MV";
import zingChartSong from "../mocks/ZingChartSong";
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
        dataAlbumHot: AlbumHot,
      };
    }
    case actionType.SAVE_VPOP: {
      return {
        ...state,
        dataVpop: VPop,
      };
    }
    case actionType.SAVE_NEWS: {
      return {
        ...state,
        dataNews: news,
      };
    }
    case actionType.SAVE_PLAYLIST: {
      return {
        ...state,
        dataPlaylist: playList,
      };
    }
    case actionType.SAVE_SINGER: {
      return {
        ...state,
        dataSinger: singer,
      };
    }
    case actionType.SAVE_SONG_RATING: {
      return {
        ...state,
        dataSongRating: songRating,
      };
    }
    case actionType.SAVE_SONG_RATING_TOP: {
      return {
        ...state,
        dataSongRatingTop: songRatingTop,
      };
    }
    case actionType.SAVE_VIDEO_HOT: {
      return {
        ...state,
        dataVideoHot: videoHot,
      };
    }
    case actionType.SAVE_ZINGCHART_ALBUM: {
      return {
        ...state,
        dataZingChartAlbum: zingChartAlbum,
      };
    }
    case actionType.SAVE_ZINGCHART_MV: {
      return {
        ...state,
        dataZingChartMV: zingChartMV,
      };
    }
    case actionType.SAVE_ZINGCHART_SONG: {
      return {
        ...state,
        dataZingChartSong: zingChartSong,
      };
    }
    default:
      return state;
  }
};
export default saveData;
