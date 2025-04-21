import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
    <div className='AppDiv'>

      <main>
        <Outlet />
      </main>
      <br></br>
      <br></br>
    <div id='NavBar'>
      <Navbar />
    </div>
    </div>
  </>
  )
}

export default App

