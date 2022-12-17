import React from 'react';
import { Container } from 'react-bootstrap/lib/tab';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';

const App= () => {
   return <>
    <Header/>
    <div className="app_containner">
      <Sidebar/>
      <Containerfluid className="app__main">
        <Homescreen />
      </Containerfluid>

   </>
}

export default App