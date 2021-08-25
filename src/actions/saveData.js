// constanst
import actionType from "../constants/actionType";

export const saveAlbumHot = (data) => ({
  type: actionType.SAVE_ALBUM_HOT,
  payload: data,
});

export const saveNews = (data) => ({
  type: actionType.SAVE_NEWS,
  payload: data,
});

export const savePlaylist = (data) => ({
  type: actionType.SAVE_PLAYLIST,
  payload: data,
});

export const saveSinger = (data) => ({
  type: actionType.SAVE_SINGER,
  payload: data,
});

export const saveVpop = (data) => ({
  type: actionType.SAVE_VPOP,
  payload: data,
});

export const saveSongRatingTop = (data) => ({
  type: actionType.SAVE_SONG_RATING_TOP,
  payload: data,
});

export const saveSongRating = (data) => ({
  type: actionType.SAVE_SONG_RATING,
  payload: data,
});

export const saveVideoHot = (data) => ({
  type: actionType.SAVE_VIDEO_HOT,
  payload: data,
});

export const saveZingChartAlbum = (data) => ({
  type: actionType.SAVE_ZINGCHART_ALBUM,
  payload: data,
});

export const saveZingChartMV = (data) => ({
  type: actionType.SAVE_ZINGCHART_MV,
  payload: data,
});

export const saveZingChartSong = (data) => ({
  type: actionType.SAVE_ZINGCHART_SONG,
  payload: data,
});
