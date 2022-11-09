import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {mainReducer} from "./reducers/index.js"
import App from './App';
let store = configureStore({reducer: mainReducer}, applyMiddleware(thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
