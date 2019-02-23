/*
[
  {
    artist: 'Meccano',
    title: 'Helicopter',
    url: 'http://techslides.com/demos/sample-videos/small.mp4',
    isBroken: false,
  },
  {
    artist: 'Dolby',
    title: 'Canyon',
    url: 'http://mirrors.standaloneinstaller.com/video-sample/dolbycanyon.m4v',
    isBroken: false,
  },
  {
    artist: 'Mazwai',
    title: 'Lillies',
    url: 'http://mazwai.com/system/posts/videos/000/000/208/preview_mp4_2/whitelilies.mp4',
    isBroken: false,
  },
]
*/

const INITIAL_STATE = {
  playlist: [
    {
      artist: 'Meccano',
      title: 'Helicopter',
      url: 'http://techslides.com/demos/sample-videos/small.mp4',
      isBroken: false,
    },
    {
      artist: 'Dolby',
      title: 'Canyon',
      url: 'http://mirrors.standaloneinstaller.com/video-sample/dolbycanyon.m4v',
      isBroken: true,
    },
  ],
  playingIdx: 0,
};

const actionTypes = {
  ADD_VIDEO_TO_PLAYLIST: 'ADD_VIDEO_TO_PLAYLIST',
  PLAY_VIDEO_BY_IDX: 'PLAY_VIDEO_BY_IDX',
  NEXT_VIDEO_IN_PLAYLIST: 'NEXT_VIDEO_IN_PLAYLIST',
  REMOVE_VIDEO_FROM_PLAYLIST: 'REMOVE_VIDEO_FROM_PLAYLIST',
  SET_VIDEO_BROKEN_STATUS: 'SET_VIDEO_BROKEN_STATUS',
};

export const addVideoToPlaylist = (artist, title, url) => ({
  type: actionTypes.ADD_VIDEO_TO_PLAYLIST,
  payload: {
    videoToAdd: {
      artist,
      title,
      url,
    }
  },
});

export const nextVideoInPlaylist = () => ({
  type: actionTypes.NEXT_VIDEO_IN_PLAYLIST,
  payload: {},
});

export const playVideoByIdx = idx => ({
  type: actionTypes.PLAY_VIDEO_BY_IDX,
  payload: {
    idx,
  },
});

export const removeVideoFromPlaylist = url => ({
  type: actionTypes.REMOVE_VIDEO_FROM_PLAYLIST,
  payload: {
    url,
  },
});

export const setVideoBrokenStatus = (url, isBroken) => ({
  type: actionTypes.SET_VIDEO_BROKEN_STATUS,
  payload: {
    url,
    isBroken,
  },
});

export default function playlistReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.NEXT_VIDEO_IN_PLAYLIST:
      let index = state.playingIdx;
      index += 1;
      if (index >= state.playlist.length) {
        index = 0;
      }
      return {
        ...state,
        playingIdx: index,
      };

    case actionTypes.PLAY_VIDEO_BY_IDX:
      return {
        ...state,
        playingIdx: action.payload.idx,
      };

    case actionTypes.ADD_VIDEO_TO_PLAYLIST:
      return {
        ...state,
        playlist: [
          ...state.playlist,
          action.payload.videoToAdd,
        ],
      };

    case actionTypes.REMOVE_VIDEO_FROM_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.filter(item => item.url !== action.payload.url),
      };

    case actionTypes.SET_VIDEO_BROKEN_STATUS:
      return {
        ...state,
        playlist: state.playlist.map(item => {
          if (item.url !== action.payload.url) {
            return item;
          }
          return {
            ...item,
            isBroken: action.payload.isBroken,
          };
        }),
      };

    default:
      return state;
  }
};