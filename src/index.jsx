import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {applyMiddleware, combineReducers, createStore} from "redux";
import accountSlicer from './slicers/accountSlice'
import bonusSlicer from './slicers/bonusSlice.js'
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

//Global Redux Store
const store = configureStore({
    reducer: {
        account: accountSlicer,
        bonus: bonusSlicer,
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
