import { createStore, combineReducers } from 'redux';
import playlistReducer from './reducers/playlistReducer';

function configureStore(initialState) {
  return createStore(
    combineReducers({
      playlist: playlistReducer,
    }),
    initialState,
  );
};

export default configureStore();
