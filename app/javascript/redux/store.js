import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import greetingsReducers from './reducers/greetings';


export default configureStore(
  {
    reducer: {
      greeting: greetingsReducers,
    },
  },
  applyMiddleware(logger),
);