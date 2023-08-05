import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = { 
  posts: [
    
  ] 
};



export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      )
    )
  );
  return store;
}