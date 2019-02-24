import React from 'react';

import PlaylistItem from '../PlaylistItem/PlaylistItem';

import './Playlist.css';

const Playlist = ({
  playlist, playingIdx, playItem, removeItem,
}) => (
  <div className="playlist">
    <h2 className="playlist__title">Playlist</h2>
    { playlist.length === 0 ? (
      <p>
        There are currently no videos in your playlist.
        Add an mp4 or m4v file to start playing.
      </p>
    ) : (
      <ul className="playlist__list">
        {playlist.map((item, idx) => {
          const {
            artist, title, url, isBroken,
          } = item;
          return (
            <PlaylistItem
              position={idx + 1}
              playItem={() => playItem(idx)}
              artist={artist}
              title={title}
              current={idx === playingIdx}
              key={item.url}
              isBroken={isBroken}
              removeItem={(e) => {
                e.stopPropagation();
                removeItem(url);
              }}
            />
          );
        })}
      </ul>
    )}
  </div>
);

export default Playlist;
