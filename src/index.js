import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//configuring react router
import { BrowserRouter } from 'react-router-dom'
//configuring redux store
import {thunk} from "redux-thunk"
import { combineReducers, createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux"
import { userAuthReducer } from "./store/reducer/userAppStorage"

//import ErrorBoundary from "./screens/Error/Error"
//configuring the redux store
const rootReducer = combineReducers({
  userAuth: userAuthReducer,
})
//creating store
const store = createStore(rootReducer, applyMiddleware(thunk))




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>

    <Provider store={store}>
        <App />

    </Provider>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

