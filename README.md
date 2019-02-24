# Video player

This is an HTML5 video player which will let you make a playlist of videos which it will continuously loop through.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Todo
Although this works if you know what you're doing, there are a few things that still need to be done.

### UX
- Reordering the playlist - kind of a no-brainer.
- Better validation on the form. At the moment it assumes you know you have to add a .mp4, .m4v or .ogv file and relies on default browser validation to stop you from doing it wrong. This could be made better.
- Saving the playlist so you don't have to recreate it every time.

### Dev
- More cross browser testing. This has been tested on Chrome, Safari and Firefox on a Mac and Safari on iOS. I have a feeling that different browsers and platforms will handle validation and playback differently.
- Write tests.