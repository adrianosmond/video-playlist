import React, { useReducer } from 'react';

import playlistReducer, {
  nextVideoInPlaylist,
  addVideoToPlaylist,
  playVideoByIdx,
  removeVideoFromPlaylist,
  setVideoBrokenStatus,
  PLAYLIST_INITIAL_STATE,
} from 'state/playlistReducer';

import AddToPlaylist from 'containers/AddToPlaylist/AddToPlaylist';
import Player from 'components/Player/Player';
import Playlist from 'components/Playlist/Playlist';

import 'App.css';

const App = () => {
  const [state, dispatch] = useReducer(playlistReducer, PLAYLIST_INITIAL_STATE);
  const { playingIdx, playlist } = state;
  const currentVideo = playlist[playingIdx] || {};

  const addVideo = (artist, title, url) => dispatch(addVideoToPlaylist(artist, title, url));
  const nextVideo = () => dispatch(nextVideoInPlaylist());
  const playVideo = idx => dispatch(playVideoByIdx(idx));
  const removeVideo = url => dispatch(removeVideoFromPlaylist(url));
  const setVideoBroken = (url, isBroken) => dispatch(setVideoBrokenStatus(url, isBroken));

  const videoPlay = () => {
    if (currentVideo.isBroken) {
      setVideoBroken(currentVideo.url, false);
    }
  };

  const videoEnded = () => nextVideo();

  const videoError = () => {
    setVideoBroken(currentVideo.url, true);
    nextVideo();
  };

  return (
    <div className="app">
      <Player
        url={currentVideo.url}
        loop={playlist.length === 1}
        onPlay={videoPlay}
        onEnded={videoEnded}
        onError={videoError}
      />
      <div className="app__body">
        <Playlist
          playlist={playlist}
          playingIdx={playingIdx}
          playItem={playVideo}
          removeItem={removeVideo}
        />
        <AddToPlaylist onAddVideo={addVideo} />
      </div>
    </div>
  );
};

export default App;
