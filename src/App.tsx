import React from 'react';
import Labs from "./Labs/index"
import { Navigate, HashRouter, Route, Routes } from 'react-router-dom';
import Kanbas from './Kanbas/index';
import LandingPage from './landingPage'


function App() {
  return (
    <HashRouter>
      <div>
       <Routes>
        <Route path="/" element={<Navigate to="LandingPage"/>} />
        <Route path="/Labs/*" element={<Labs/>} />
        <Route path="/Kanbas/*" element={<Kanbas/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
       </Routes>
      </div>
    </HashRouter>
 );}
 
export default App;
