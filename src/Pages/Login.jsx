import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import store from '../app/store';
import { loginData } from '../features/userData';



const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('')
  const [user, setUser] =useState({
    email:"",
    password:"",
    login:true
  });


  const localdata = useSelector((state) => state.registration.userData)

  const handleInput = e => {
    setError("");
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]:value})
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if(localdata===  undefined){
      return setError("Your not registered yet")
    }
    if(localdata?.email !== user?.email || localdata?.password !== user?.password){
      return setError("Invalid Credentials")
    }
    dispatch(loginData(user));
    navigate('/home');
  }

  return (
    <section>
      <main>
        <div className='section-registration'>
          <div className='container'>
            <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
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
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <p className='error'>{error}</p>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Login