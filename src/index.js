import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './css/index.css';
import App from './../src/css/App.css';
import reportWebVitals from './reportWebVitals';
import MainIndexComponent from './mainIndex/mainIndexComponent';
import HomeContainerComponent from './homePage/homeContainerComponent';
import ContactContainerComponent from './contactPage/contactContainerComponent';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={< HomeContainerComponent/>} />
        <Route path="/plants" element={<MainIndexComponent />} />
        <Route path="/contact" element={<ContactContainerComponent />} />


        {/* <App /> */}
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
