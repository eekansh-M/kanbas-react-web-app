import React from 'react';
import Labs from "./Labs/Labs1"
import UnorderedList from './Labs/UnorderedList';
import OrderedLists from './Labs/OrderedLists';
import Table from './Labs/Table'; 
import Image from './Labs/Image';
import Form from './Labs/Form';
import Button from './Labs/Button'
import OtherFields from './Labs/OtherFields'
import { Navigate, HashRouter, Route, Routes } from 'react-router-dom';
import Kanbas from './Kanbas/index';


function App() {
  return (
    <HashRouter>
      <div>
       <Routes>
        <Route path="/" element={<Navigate to="Kanbas"/>} />
        <Route path="/Lab1/" element={<Labs/>} />
        <Route path="/Kanbas/*" element={<Kanbas/>}/>
       </Routes>
      </div>
    </HashRouter>
 );}
 
export default App;
