import { createStore, applyMiddleware ,combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import Mega_Mnu from '../reducer/Home/Menu/Mega_Menu';
import notification from '../reducer/notifications';

/// dispatch ///

const combined = combineReducers({
  Mega_Mnu,
  notification
});

const middleware = [
  logger,
];

export const initStore = initialState =>
  createStore(combined, initialState,applyMiddleware(...middleware));
