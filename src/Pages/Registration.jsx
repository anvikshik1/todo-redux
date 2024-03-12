import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerData } from '../features/userData';


const Registration = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
        login:false
      });

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({
          ...user,
          [name]:value
        })
    }
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(registerData(user));
        navigate('/login');
      }
  return (
    <section>
    <main>
      <div className="section-registration">
        <div className="container">
          <div className="registration-form">
            <h1 className="main-heading mb-3">registration form</h1>
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                  placeholder="username"
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="email"
                />
              </div>
              <div>
                <label htmlFor="phone">phone</label>
                <input
                  type="number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="password"
                />
              </div>
              <br />
              <button type="submit" className="btn btn-submit">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </section>
  )
}

export default Registration