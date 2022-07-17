import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useStateValue } from '../../StateProvider';
import {IconButton, Avatar} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {auth, provider} from '../../firebase';


const Header = () => {
  const navigate = useNavigate();

  const [{user},] = useStateValue();
  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }else{
      auth.signInWithPopup(provider)
      .then((auth)=>{
        if(auth){
          navigate('/')
        }
      })
      .catch(error=> alert(error.message))
    }
  }


  return (
    <React.Fragment>
    <nav id="navbar">
      <div id="logo">
        <Link to='/'>
            React Task
        </Link>
      </div>

        <div className="item__login">
          {user &&  (
            <div className='user__profile'>
            <div className='user__name'>
              <span>{user?.displayName}</span>
              <span>{user?.email}</span>
            </div>
              <IconButton>
              {user.photoURL ? (<Avatar src={user.photoURL} />) : (<Avatar src='https://avatars.dicebear.com/api/adventurer/love.svg' />)}
                  
              </IconButton>
            </div>
          )}
          {user ? 
            (<div className="logout__handle"  onClick={handleAuthentication}>
              <Link to='/'>
               Log Out
            </Link>
            </div>) :
            (<div className=" login__handle"  onClick={handleAuthentication}>
              <Link to='/'>
                  Log In
              </Link>
              </div>)}
          </div>
    </nav>
    </React.Fragment>
  )
}

export default Header
