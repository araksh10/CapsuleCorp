import capsuleCorp from './assets/capsuleCorp.png';
import './App.css';
import Home from './pages/Home';

function App() {
  
  return (
    <>
      <div className='Capsule-Carrier'>
        <a href="#" target="_blank">
          <img src={capsuleCorp} className="logo react" alt="React logo" />
        </a>

        < Home />
      </div>
    </>
  )
}

export default App;
