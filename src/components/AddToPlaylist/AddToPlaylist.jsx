import React, { useState } from 'react';


import './AddToPlaylist.css';
import FormRow from '../FormRow/FormRow';
import FormInput from '../FormInput/FormInput';

const isValidVideo = url => url && (
  url.toLowerCase().endsWith('.mp4') ||
  url.toLowerCase().endsWith('.m4v')
);

const AddToPlaylist = ({ onAddVideo }) => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const onFormSubmit = evt => {
    evt.preventDefault();
    if (isValidVideo(url)) {
      onAddVideo(artist, title, url)
      setArtist('');
      setTitle('');
      setUrl('');
      return true;
    } else {
      return false; 
    }
  };

  return (
    <div className="add-to-playlist">
      <h3>Add to playlist</h3>
      <form
        onSubmit={onFormSubmit}
        className="add-to-playlist__form"
      >
        <FormRow>
          <FormInput
            label="Artist"
            value={artist}
            required
            onChange={e => setArtist(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <FormInput
            label="Title"
            value={title}
            required
            onChange={e => setTitle(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <FormInput
            label="URL"
            value={url}
            required
            onChange={e => setUrl(e.target.value)}
            type="url"
          />
        </FormRow>
        <button className="form__button" type="submit">Add to playlist</button>
      </form>
    </div>
  )
};

export default AddToPlaylist;
