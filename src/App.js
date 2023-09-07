import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Routes from './components/ProgressBarIndicatorRoutes';

import Nav from './components/Menu'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/about" element={<About></About>}></Route>
          <Route exact path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;