import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// data 
const notes = [
  {
   id:1,
   content :"HTML is easy",
   date: "2019-05-30T17:30:31.098Z",
   important : true
},
{
  id:2,
  content :"JS is easy",
  date: "2019-05-30T18:30:31.091Z",
  important : false
},
{
  id:3,
  content :"CSS is easy",
  date: "2019-05-30T19:20:14.298Z",
  important : true
}
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App notes = { notes } />
  </React.StrictMode>,
)
