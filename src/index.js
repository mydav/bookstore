import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainComponent from '../src/Components/MainComponent'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// import BookList from './components/BookList';

ReactDOM.render(<MainComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// render (<BookList/>, document.getElementById('root'))
