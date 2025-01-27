import { useState } from 'react';
import capsuleCorp from './assets/capsuleCorp.png';
import './App.css'

function App() {
  
  return (
    <>
      <div className='Capsule-Carrier'>
        <a href="https://react.dev" target="_blank">
          <img src={capsuleCorp} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App;
