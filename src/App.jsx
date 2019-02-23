import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  nextVideoInPlaylist,
  addVideoToPlaylist,
  playVideoByIdx,
  removeVideoFromPlaylist,
  setVideoBrokenStatus,
} from './state/reducers/playlistReducer';

import AddToPlaylist from './containers/AddToPlaylist/AddToPlaylist';
import Player from './components/Player/Player';
import Playlist from './components/Playlist/Playlist';

import './App.css';

class App extends Component {
  videoPlay = () => {
    const { currentVideo, setVideoBroken } = this.props;
    if (currentVideo.isBroken) {
      setVideoBroken(currentVideo.url, false);
    }
  }

  videoEnded = () => {
    const { nextVideo } = this.props;
    nextVideo();
  }

  videoError = () => {
    const { currentVideo, nextVideo, setVideoBroken } = this.props;
    setVideoBroken(currentVideo.url, true);
    nextVideo();
  }

  render() {
    const {
      playlist, playingIdx, playVideo, addVideo, removeVideo, currentVideo
    } = this.props;

    return (
      <div className="app">
        <Player
          url={currentVideo.url}
          loop={playlist.length === 1}
          onPlay={this.videoPlay}
          onEnded={this.videoEnded}
          onError={this.videoError}
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
  }
}

const mapStateToProps = state => ({
  playingIdx: state.playlist.playingIdx,
  playlist: state.playlist.playlist,
  currentVideo: state.playlist.playlist[state.playlist.playingIdx] || {},
})

const mapDispatchToProps = dispatch => ({
  addVideo: (artist, title, url) => dispatch(addVideoToPlaylist(artist, title, url)),
  nextVideo: () => dispatch(nextVideoInPlaylist()),
  playVideo: idx => dispatch(playVideoByIdx(idx)),
  removeVideo: url => dispatch(removeVideoFromPlaylist(url)),
  setVideoBroken: (url, isBroken) => dispatch(setVideoBrokenStatus(url, isBroken)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
