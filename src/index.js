import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router} from 'react-router-dom'
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';



const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBZbUZao_JUbNjqxsr3H8IMhYq7zYD_9U4",
  authDomain: "chat-ap-d65d0.firebaseapp.com",
  databaseURL: "https://chat-ap-d65d0.firebaseio.com",
  projectId: "chat-ap-d65d0",
  storageBucket: "chat-ap-d65d0.appspot.com",
  messagingSenderId: "902167689276",
  appId: "1:902167689276:web:863cd354f0723167052b39",
  measurementId: "G-W7B7CK2NNG"
});

const routing = (
  <Router>
    <Router id="routing-container">
      <Route path='/' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </Router>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);


serviceWorker.unregister();
