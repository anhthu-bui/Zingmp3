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

const save = (state = initialState, action) => {
  switch (action.type) {
    case "dataAlbumHot": {
      return {
        ...state,
        dataAlbumHot: AlbumHot,
      };
    }
    case "dataVpop": {
      return {
        ...state,
        dataVpop: VPop,
      };
    }
    case "dataNews": {
      return {
        ...state,
        dataNews: news,
      };
    }
    case "dataPlaylist": {
      return {
        ...state,
        dataPlaylist: playList,
      };
    }
    case "dataSinger": {
      return {
        ...state,
        dataSinger: singer,
      };
    }
    case "dataSongRating": {
      return {
        ...state,
        dataSongRating: songRating,
      };
    }
    case "dataSongRatingTop": {
      return {
        ...state,
        dataSongRatingTop: songRatingTop,
      };
    }
    case "dataVideoHot": {
      return {
        ...state,
        dataVideoHot: videoHot,
      };
    }
    case "dataZingChartAlbum": {
      return {
        ...state,
        dataZingChartAlbum: zingChartAlbum,
      };
    }
    case "dataZingChartMV": {
      return {
        ...state,
        dataZingChartMV: zingChartMV,
      };
    }
    case "dataZingChartSong": {
      return {
        ...state,
        dataZingChartSong: zingChartSong,
      };
    }
    default:
      return state;
  }
};
export default save;
