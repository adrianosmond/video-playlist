import React, { useState } from 'react';

import Form from 'components/Form/Form';
import FormRow from 'components/FormRow/FormRow';
import FormInput from 'components/FormInput/FormInput';

const AddToPlaylist = ({ onAddVideo }) => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    onAddVideo(artist, title, url);
    setArtist('');
    setTitle('');
    setUrl('');
    return true;
  };

  return (
    <Form onFormSubmit={onFormSubmit} button="Add to playlist">
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
          pattern="http[s]?://.*[.](mp4|m4v|avi|ogv)"
          onChange={e => setUrl(e.target.value)}
          type="url"
        />
      </FormRow>
    </Form>
  );
};

export default AddToPlaylist;
