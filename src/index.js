import React from 'react'
import  ReactDOM  from 'react-dom/client';
import App from './App'

// document.getElementById("root").addEventListener("contextmenu" , function(ev){ev.preventDefault()})

const rootMaker = ReactDOM.createRoot(document.getElementById("root"));
rootMaker.render(<App/>)