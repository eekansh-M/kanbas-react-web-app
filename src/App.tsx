import React from 'react';
import Labs from "./Labs/index"
import { Navigate, HashRouter, Route, Routes } from 'react-router-dom';
import Kanbas from './Kanbas/index';
import LandingPage from './landingPage'
import store from "./Kanbas/store";
import { Provider } from "react-redux";


function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
       <Routes>
        <Route path="/" element={<Navigate to="LandingPage"/>} />
        <Route path="/Labs/*" element={<Labs/>} />
        <Route path="/Kanbas/*" element={<Kanbas/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
       </Routes>
      </div>
      </Provider>
    </HashRouter>
 );}
 
export default App;
