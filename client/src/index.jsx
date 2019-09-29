import React from 'react';
import App from '../components/App.jsx';
import ReactDOM from 'react-dom';
import dummyArr from './dummyData.js'; 
//aka dummyArr = arr, still need ./ even if is a file from same dir


ReactDOM.render(<App dummyDataArr={dummyArr}/>, document.getElementById('app'));
//no strings needed for the value since already in curly braces
//is NOT just 'app', it's document.getElementBy!!
//ok to pass in an arr

