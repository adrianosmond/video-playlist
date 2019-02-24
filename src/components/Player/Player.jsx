import React from 'react';

import './Player.css';

const Player = ({
  url, onEnded, onPlay, onError, loop,
}) => (
  <video
    className="player"
    controls
    autoPlay
    loop={loop}
    onEnded={onEnded}
    onError={onError}
    onPlay={onPlay}
    key={url}
  >
    <source src={url} />
  </video>
);

export default Player;
