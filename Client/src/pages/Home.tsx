import { Link } from 'react-router-dom';
import noteBook from '../assets/notebook.png' // Notebook Logo
import golfBall from '../assets/golf-icon.png' // Log Your Round
import { useState } from 'react';
import auth from '../utils/auth';

export default function Home() {
    const [loginCheck] = useState(()=>auth.loggedIn());
  return (
    <>
    <h1 className='WTGG'>Welcome to Golf Geek!</h1>
    <header>
      <div className="text-content">
        <p className='break-point'>
          <span className='marck-script'>Golf Geek</span> <br></br> A unique application for golf fanatics. 
          Enjoy easy access to up-to-date news on the PGA Tour, 
          check the Weather and even log your rounds! See all previous rounds played and note your favorite things 
          about the course. <br /> <br />
          (Or how many mulligans you used!)
        </p>
      </div>
      <div id="mainIMG"></div>
    </header>
{ loginCheck &&  <><main className="LogoPage">
        <div>
          <h2>Log Your Round</h2>
          <Link to="/scorecard">
            <img src={golfBall} className="logo" alt="Golf Ball logo" />
          </Link>
        </div>
        <div>
          <h2>Previous Rounds</h2>
          <Link to="/previousrounds">
            <img src={noteBook} className="logo" alt="Golf Ball logo" />
          </Link>
        </div>
        <div className="card">
        </div>
      </main><>
        </></>
    } 
      </>
  )
}
