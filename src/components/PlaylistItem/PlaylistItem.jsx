import React from 'react';
import classNames from 'classnames';

import IconEqualiser from 'components/IconEqualiser';

import './PlaylistItem.css';

const PlaylistItem = ({
  position, artist, title, current, playItem, removeItem, isBroken,
}) => (
  <li
    onClick={playItem}
    className={classNames({
      'playlist-item': true,
      'playlist-item--current': current,
      'playlist-item--broken': isBroken,
    })}
  >
    <span className="playlist-item__position">
      {current ? (
        <IconEqualiser />
      ) : position}
    </span>
    <span className="playlist-item__description">
      <span className="playlist-item__title">{title}</span>
      <span className="playlist-item__artist">{artist}</span>
    </span>
    <button type="button" className="playlist-item__delete" onClick={removeItem}>
      <svg className="playlist-item__delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
        <path fill="none" d="M0 0h24v24H0z" />
      </svg>
    </button>
  </li>
);

export default PlaylistItem;
