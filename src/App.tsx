import React from 'react';
import Lab1 from "./Labs/Labs1"
import UnorderedList from './Labs/UnorderedList';
import OrderedLists from './Labs/OrderedLists';
import Table from './Labs/Table'; 
import Image from './Labs/Image';
import Form from './Labs/Form';
import Button from './Labs/Button'

function App() {
  return (
    <div>
       <Lab1/>
       <p>In this, you will see all of my lab exercises.</p>
       <UnorderedList/>
       <OrderedLists/>
       <Table/>
       <Image/>
       <Form/>
       <Button/>
    </div>
   
  );
}

export default App;
