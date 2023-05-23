//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import { useState } from 'react';

function App() {

const [text,setText]=useState("Enter text here");




  return (
<>
      <Navbar title="TextUtils"/>
      
      <div className='container'>
      <Textforms/>
      
      </div>
      

      </>
  );
}

export default App;
