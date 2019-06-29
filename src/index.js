import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import homee from './Component/home';
// import Login from './Login';
// import signup from './Component/loginComponent/signUp'
// const EnhancedComponent = higherOrderComponent(WrrapedComponent);
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
