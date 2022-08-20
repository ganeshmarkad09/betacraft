
import './App.css';
import Navbar from './component/Navbar';
import React from 'react';
import Slider from './component/Slider';
import Local from './component/Local';
import Services from './component/Services';
import Card from './component/Card';
import Careesrs from './component/Careesrs';
import Blogs from './component/Blogs';
import Globlereach from './component/Globlereach';
import Ourwork from './component/Ourwork';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <Slider/>
         <Local/>
         <Services/>
         <Card/>
         <Globlereach/>

         <Careesrs/>
         <Blogs/>
         <Ourwork/>
         <Footer/>
    </div>
  );
}

export default App;
