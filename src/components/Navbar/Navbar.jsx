import React from 'react';
import { NavLink} from 'react-router-dom'
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearData } from '../../features/userData';



const Navbar = () => {
    const dispatch = useDispatch()
    const login = useSelector((state) => state.registration.login.login);

    const Logout = () =>{
        dispatch(clearData())
    }
  return (
    <div>
        <header>
            <div className='nav-container'>
                <div className='logo-name'>
                    <NavLink to='#'>CA</NavLink> 
                    <NavLink to='#'> - Courtside Analytics</NavLink> 
                </div>
                <nav>
                    <ul>
                        {!login? 
                        <>
                            <li><NavLink to='/'>Registration</NavLink></li>
                            <li><NavLink to='/login'>Login</NavLink></li>
                        </>
                        :
                        <>
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/alltask'>All Task</NavLink></li>
                            <li><NavLink to='/login' onClick={()=>Logout()}>Logout</NavLink></li>
                        </>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar