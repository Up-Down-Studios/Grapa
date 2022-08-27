/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

import {signOut} from '../../Controllers/Redux/authSlice'
import './sidebar.css'


export default () => {
    
    
    const dispatch = useDispatch();
    const {auth} = useSelector(state => state)
    
    function SignOut(){
        dispatch(signOut());
    }
    
    return (
      <div className="sidebar">
          <Link className='nav-link' to="/">
              <h1 className="brand">Bug-tracker</h1>
          </Link>
          <ul>
              <li><Link to="/" className="nav-link">Dashboard</Link></li>
              <li><Link to="/viewbugs" className="nav-link">View Bugs</Link></li>
              {auth.Admin && <li><Link to="/createbugs" className="nav-link">Create Bug</Link> </li>}
          </ul>
          <button className="nav-link logout" onClick={signOut} >Logout</button>
      </div>
    )

}
 