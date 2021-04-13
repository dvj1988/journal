import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsoBYfDjaN6Ri4nnhfs8A3h6Pn7nhjcV0",
  authDomain: "journal-af8c1.firebaseapp.com",
  projectId: "journal-af8c1",
  storageBucket: "journal-af8c1.appspot.com",
  messagingSenderId: "794981906891",
  appId: "1:794981906891:web:42a021bae920a60e5fde4e",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
