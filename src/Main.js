import React from 'react'
import App from './App';
import Widget from './Widget'
import Visualize from './Visualize'
import DataFetch from './DataFetch';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";


function Main() {
  return (
      <Router>
          <Routes>
             <Route path="/" exact element={<App />} />
             <Route path="/q3" element={<Widget />} />
             <Route path="/chart" element={<Visualize />} />
             <Route path="/data" element={<DataFetch />} />
          </Routes>
      </Router>
  )
}
export default Main