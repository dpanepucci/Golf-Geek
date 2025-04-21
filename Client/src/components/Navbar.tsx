import { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  // State to track the Sign up status
  // const [signUpCheck, setsignUpCheck] = useState(()=>auth.loggedIn());
  const [loginCheck] = useState(()=>auth.loggedIn());

 

  return (
    <div className="display-flex justify-space-between align-center py-2 px-5 mint-green">
      <div>
        {
          !loginCheck ? (
            <>
          
              <Link to='/login' style={{ color: 'white' }}><button id="btn" type='button'>Login 
            </button>
            </Link>
            <button className="btn" type='button'>
              <Link to='/signup' style={{ color: 'white' }}>Sign Up</Link>
            </button>
            </>
          ) : (
            <button className="btn" type='button' onClick={() => {
              auth.logout();
            }}>Logout</button>
          )
        }
       
      </div>
    </div>
  );
};

export default Navbar;
