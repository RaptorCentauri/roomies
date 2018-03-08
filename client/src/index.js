import React from 'react';
import { createStore } from 'redux';
import allReducers from "./reducers";
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const store = createStore(allReducers);

console.log("Default Store", store.getState())

store.subscribe(()=>console.log("Store Updated", store.getState()))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));